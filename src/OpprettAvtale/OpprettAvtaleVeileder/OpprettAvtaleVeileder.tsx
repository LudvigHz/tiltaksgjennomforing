import TilbakeTilOversiktLenke from '@/AvtaleSide/TilbakeTilOversiktLenke/TilbakeTilOversiktLenke';
import Dokumenttittel from '@/komponenter/Dokumenttittel';
import LagreKnapp from '@/komponenter/LagreKnapp/LagreKnapp';
import useValidering from '@/komponenter/useValidering';
import { pathTilOpprettAvtaleFullfortVeileder } from '@/paths';
import {
    hentBedriftBrreg,
    opprettAvtaleSomVeileder,
    opprettMentorAvtale,
    sjekkOmDeltakerAlleredeErRegistrertPaaTiltak,
} from '@/services/rest-service';
import { AlleredeRegistrertAvtale, TiltaksType } from '@/types/avtale';
import { Feilkode, Feilmeldinger } from '@/types/feilkode';
import amplitude from '@/utils/amplitude';
import { handterFeil } from '@/utils/apiFeilUtils';
import BEMHelper from '@/utils/bem';
import { validatorer, validerFnr } from '@/utils/fnrUtils';
import { validerOrgnr } from '@/utils/orgnrUtils';
import { Innholdstittel } from 'nav-frontend-typografi';
import React, { ChangeEvent, FunctionComponent, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import TiltaksTypeRadioPanel from '@/OpprettAvtale/OpprettAvtaleVeileder/TiltaksTypeRadioPanel';
import InformasjonsboksTopVeilederOppretterAvtale from '@/OpprettAvtale/OpprettAvtaleVeileder/InformasjonsboksTopVeilederOppretterAvtale';
import HvemSkalInngaaAvtalen from '@/OpprettAvtale/OpprettAvtaleVeileder/HvemSkalInngaaAvtalen';
import './opprettAvtaleVeileder.less';
import './OpprettAvtale.less';
import OpprettAvtaleMedAlleredeOpprettetTiltak from '@/komponenter/alleredeOpprettetTiltak/OpprettAvtaleMedAlleredeOpprettetTiltak';
import { AlleredeOpprettetAvtaleContext } from '@/komponenter/alleredeOpprettetTiltak/api/AlleredeOpprettetAvtaleProvider';
import { useQuery, isGyldigTiltakstype } from '../../utils/urlQueryUtils';

const cls = BEMHelper('opprett-avtale');

export enum Avtalerolle {
    DELTAKER = 'DELTAKER',
    MENTOR = 'MENTOR',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
    VEILEDER = 'VEILEDER',
    BESLUTTER = 'BESLUTTER',
}

const OpprettAvtaleVeileder: FunctionComponent = (props) => {
    const optionalTypeAvtale = useQuery().get('type');
    const optionalDeltakerFnr = useQuery().get('deltakerfnr');
    const optionalVirksomhetsnummer = useQuery().get('virksomhetsnummer');
    const [deltakerFnr, setDeltakerFnr] = useState<string>(optionalDeltakerFnr ?? '');
    const [mentorFnr, setMentorFnr] = useState<string>('');
    const [ugyldigAvtaletype, setUgyldigAvtaletype] = useState<boolean>(false);
    const [bedriftNr, setBedriftNr] = useState<string>(optionalVirksomhetsnummer ?? '');
    const [bedriftNavn, setBedriftNavn] = useState<string>('');
    const [valgtTiltaksType, setTiltaksType] = useState<TiltaksType | undefined>(
        isGyldigTiltakstype(optionalTypeAvtale) ? optionalTypeAvtale : undefined
    );
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const { alleredeRegistrertAvtale, setAlleredeRegistrertAvtale } = useContext(AlleredeOpprettetAvtaleContext);

    const history = useHistory();

    const [deltakerFnrFeil, setDeltakerFnrFeil, validerDeltakerFnr] = useValidering(
        deltakerFnr,
        validatorer('Deltaker', mentorFnr)
    );
    const [mentorFnrFeil, setMentorFnrFeil, validerMentorFnr] = useValidering(
        mentorFnr,
        validatorer('Mentor', deltakerFnr)
    );

    const [bedriftNrFeil, setBedriftNrFeil, validerBedriftNr] = useValidering(bedriftNr, [
        (verdi) => {
            if (!verdi) return 'Virksomhetsnummer er påkrevd';
        },
        (verdi) => {
            if (!validerOrgnr(verdi)) return 'Ugyldig virksomhetsnummer';
        },
    ]);

    const orgnrOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const verdi = event.target.value.replace(/\D/g, '');
        if (/^\d{0,9}$/.test(verdi)) {
            setBedriftNr(verdi);
            setBedriftNrFeil(undefined);
            setBedriftNavn('');
        }
    };

    const orgnrOnBlur = (): void => {
        if (validerBedriftNr()) {
            hentBedriftBrreg(bedriftNr)
                .then((response) => {
                    setBedriftNavn(response.bedriftNavn);
                    setBedriftNrFeil(undefined);
                })
                .catch((error) => {
                    setBedriftNavn('');
                    handterFeil(error, (feilmelding) => setBedriftNrFeil(feilmelding));
                })
                .catch((e) => setBedriftNrFeil('Det oppstod en uventet feil'));
        } else {
            setBedriftNavn('');
        }
    };

    const setFeilmelding = (melding: Feilkode) => {
        if (melding === 'SOMMERJOBB_FOR_GAMMEL') {
            setDeltakerFnrFeil(Feilmeldinger.SOMMERJOBB_FOR_GAMMEL);
        }
    };

    const opprettAvtaleKlikk = async () => {
        let valgtAvtaleType = false;
        let feilDeltakerFNR = '';
        let feilBedriftNr = '';
        let feilMentorFNR = '';

        if (!valgtTiltaksType) {
            valgtAvtaleType = true;
        }
        if (!validerFnr(deltakerFnr)) {
            feilDeltakerFNR = Feilmeldinger.UGYLDIG_FØDSELSNUMMER;
        }
        if (!validerOrgnr(bedriftNr)) {
            feilBedriftNr = Feilmeldinger.UGYLDIG_VIRKSOMHETSNUMMER;
        }
        if (!validerMentorFnr()) {
            feilMentorFNR = Feilmeldinger.UGYLDIG_FØDSELSNUMMER;
        }
        if (feilBedriftNr.length === 0 && feilDeltakerFNR.length === 0 && valgtTiltaksType) {
            if (valgtTiltaksType === 'MENTOR') {
                if (deltakerFnr !== mentorFnr && feilMentorFNR.length === 0) {
                    const mentorAvtale = await opprettMentorAvtale(
                        deltakerFnr,
                        mentorFnr,
                        bedriftNr,
                        valgtTiltaksType,
                        Avtalerolle.VEILEDER
                    );
                    amplitude.logEvent('#tiltak-avtale-opprettet', { tiltakstype: valgtTiltaksType });
                    history.push(pathTilOpprettAvtaleFullfortVeileder(mentorAvtale.id));
                    return;
                }
                return;
            }
            const avtale = await opprettAvtaleSomVeileder(deltakerFnr, bedriftNr, valgtTiltaksType);
            amplitude.logEvent('#tiltak-avtale-opprettet', { tiltakstype: valgtTiltaksType });
            history.push(pathTilOpprettAvtaleFullfortVeileder(avtale.id));
            return;
        }

        setUgyldigAvtaletype(valgtAvtaleType);
        setBedriftNrFeil(feilBedriftNr);
        setDeltakerFnrFeil(feilDeltakerFNR);
    };

    const sjekkOmAvtaleErOpprettet = async () => {
        if (deltakerFnr.length === 11 && bedriftNr.length === 9 && valgtTiltaksType) {
            try {
                const listeAvtalerDeltakerAlleredeRegistrert: AlleredeRegistrertAvtale[] | [] =
                    await sjekkOmDeltakerAlleredeErRegistrertPaaTiltak(deltakerFnr, valgtTiltaksType, null, null, null);
                if (listeAvtalerDeltakerAlleredeRegistrert.length > 0) {
                    setAlleredeRegistrertAvtale({
                        ...alleredeRegistrertAvtale,
                        avtaler: listeAvtalerDeltakerAlleredeRegistrert,
                        deltaker: deltakerFnr,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        sjekkOmAvtaleErOpprettet();
        // eslint-disable-next-line
    }, [valgtTiltaksType, deltakerFnr, bedriftNr]);

    return (
        <div className={cls.className}>
            <Dokumenttittel tittel="Opprett avtale" />
            <Innholdstittel className={cls.element('innholdstittel')}>Opprett avtale</Innholdstittel>
            <InformasjonsboksTopVeilederOppretterAvtale />
            <TiltaksTypeRadioPanel
                className={cls.className}
                setTiltaksType={setTiltaksType}
                ugyldigAvtaletype={ugyldigAvtaletype}
                valgtTiltaksType={valgtTiltaksType}
                setUgyldigAvtaletype={setUgyldigAvtaletype}
            />
            <HvemSkalInngaaAvtalen
                deltakerFnr={deltakerFnr}
                setDeltakerFnr={setDeltakerFnr}
                deltakerFnrFeil={deltakerFnrFeil}
                setDeltakerFnrFeil={setDeltakerFnrFeil}
                validerDeltakerFnr={validerDeltakerFnr}
                bedriftNr={bedriftNr}
                orgnrOnChange={orgnrOnChange}
                orgnrOnBlur={orgnrOnBlur}
                bedriftNrFeil={bedriftNrFeil}
                bedriftNavn={bedriftNavn}
                valgtTiltaksType={valgtTiltaksType}
                mentorFnr={mentorFnr}
                setMentorFnr={setMentorFnr}
                mentorFnrFeil={mentorFnrFeil}
                setMentorFnrFeil={setMentorFnrFeil}
                validerMentorFnr={validerMentorFnr}
                alleredeRegistrertAvtale={alleredeRegistrertAvtale}
                setModalIsOpen={setModalIsOpen}
            />
            <div className={cls.element('knappRad')}>
                <LagreKnapp
                    lagre={opprettAvtaleKlikk}
                    setFeilmelding={setFeilmelding}
                    label={'Opprett avtale'}
                    className="opprett-avtale__knapp"
                />

                <TilbakeTilOversiktLenke />
            </div>
            <OpprettAvtaleMedAlleredeOpprettetTiltak
                alleredeRegistrertAvtale={alleredeRegistrertAvtale.avtaler}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
        </div>
    );
};

export default OpprettAvtaleVeileder;
