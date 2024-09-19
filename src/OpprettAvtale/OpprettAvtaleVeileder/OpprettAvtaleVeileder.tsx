import TilbakeTilOversiktLenke from '@/AvtaleSide/TilbakeTilOversiktLenke/TilbakeTilOversiktLenke';
import { AlleredeOpprettetAvtaleContext } from '@/komponenter/alleredeOpprettetTiltak/api/AlleredeOpprettetAvtaleProvider';
import OpprettAvtaleMedAlleredeOpprettetTiltak from '@/komponenter/alleredeOpprettetTiltak/OpprettAvtaleMedAlleredeOpprettetTiltak';
import Dokumenttittel from '@/komponenter/Dokumenttittel';
import LagreKnapp from '@/komponenter/LagreKnapp/LagreKnapp';
import useValidering from '@/komponenter/useValidering';
import HvemSkalInngaaAvtalen from '@/OpprettAvtale/OpprettAvtaleVeileder/HvemSkalInngaaAvtalen';
import InformasjonsboksTopVeilederOppretterAvtale from '@/OpprettAvtale/OpprettAvtaleVeileder/InformasjonsboksTopVeilederOppretterAvtale';
import TiltaksTypeRadioPanel from '@/OpprettAvtale/OpprettAvtaleVeileder/TiltaksTypeRadioPanel';
import { pathTilKontaktinformasjonSteg } from '@/paths';
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
import { Alert, Heading } from '@navikt/ds-react';
import { ChangeEvent, FunctionComponent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OpprettAvtale.less';
import './opprettAvtaleVeileder.less';
import { FeilVarselContext } from '@/FeilVarselProvider';
import { useFeatureToggles } from '@/FeatureToggleProvider';
import VerticalSpacer from '@/komponenter/layout/VerticalSpacer';

const cls = BEMHelper('opprett-avtale');

export enum Avtalerolle {
    DELTAKER = 'DELTAKER',
    MENTOR = 'MENTOR',
    ARBEIDSGIVER = 'ARBEIDSGIVER',
    VEILEDER = 'VEILEDER',
    BESLUTTER = 'BESLUTTER',
}

const OpprettAvtaleVeileder: FunctionComponent = () => {
    const [deltakerFnr, setDeltakerFnr] = useState<string>('');
    const [mentorFnr, setMentorFnr] = useState<string>('');
    const [ugyldigAvtaletype, setUgyldigAvtaletype] = useState<boolean>(false);
    const [bedriftNr, setBedriftNr] = useState<string>('');
    const [bedriftNavn, setBedriftNavn] = useState<string>('');
    const [valgtTiltaksType, setTiltaksType] = useState<TiltaksType | undefined>();
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const { alleredeRegistrertAvtale, setAlleredeRegistrertAvtale } = useContext(AlleredeOpprettetAvtaleContext);
    const { arbeidstreningReadonly } = useFeatureToggles();
    const visVarsel = useContext(FeilVarselContext);

    const navigate = useNavigate();

    const [deltakerFnrFeil, setDeltakerFnrFeil, validerDeltakerFnr] = useValidering(
        deltakerFnr,
        validatorer('Deltaker', mentorFnr),
    );
    const [mentorFnrFeil, setMentorFnrFeil, validerMentorFnr] = useValidering(
        mentorFnr,
        validatorer('Mentor', deltakerFnr),
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
                .catch((error: Error) => {
                    setBedriftNrFeil('Det oppstod en uventet feil');
                    console.error(
                        `Det oppstod en uventet feil ved henting av virksomhetsnummer ${
                            bedriftNr ? bedriftNr : ''
                        } med feilmelding: `,
                        error,
                    );
                });
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
                        Avtalerolle.VEILEDER,
                    );
                    amplitude.logEvent('#tiltak-avtale-opprettet', { tiltakstype: valgtTiltaksType });
                    navigate(pathTilKontaktinformasjonSteg(mentorAvtale.id));
                    return;
                }
                return;
            }
            const avtale = await opprettAvtaleSomVeileder(deltakerFnr, bedriftNr, valgtTiltaksType);
            amplitude.logEvent('#tiltak-avtale-opprettet', { tiltakstype: valgtTiltaksType });
            navigate(pathTilKontaktinformasjonSteg(avtale.id));
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
            <Heading size="large" className={cls.element('innholdstittel')}>
                Opprett avtale
            </Heading>
            {arbeidstreningReadonly && (
                <>
                    <Alert variant={'warning'}>
                        Migrering fra Arena pågår. Avtale om arbeidstrening kan ikke opprettes mens migrering pågår.
                        Forsøk igjen om et par timer.
                    </Alert>
                    <VerticalSpacer rem={1} />
                </>
            )}
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
                    className="opprett-avtale__knapp"
                    label="Opprett avtale"
                />
                <TilbakeTilOversiktLenke />
            </div>
            <OpprettAvtaleMedAlleredeOpprettetTiltak
                alleredeRegistrertAvtale={alleredeRegistrertAvtale.avtaler}
                isApen={modalIsOpen}
                onLukk={() => setModalIsOpen(false)}
            />
        </div>
    );
};

export default OpprettAvtaleVeileder;
