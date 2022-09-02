import { ReactComponent as RettighetsHammerIkon } from '@/assets/ikoner/lov.svg';
import { ReactComponent as Passport } from '@/assets/ikoner/passport.svg';
import { AvtaleContext } from '@/AvtaleProvider';
import IkonTekstRad from '@/komponenter/EkspanderbartPanelRad/IkonTekstRad';
import VerticalSpacer from '@/komponenter/layout/VerticalSpacer';
import EksternLenke from '@/komponenter/navigation/EksternLenke';
import VeilederpanelMedUtklippstavleIkon from '@/komponenter/Veilederpanel/VeilederpanelMedUtklippstavleIkon';
import { Bandage } from '@navikt/ds-icons';
import { Normaltekst } from 'nav-frontend-typografi';
import { FunctionComponent, useContext } from 'react';

const DeltakerMidlertidigLonnstilskuddInstruks: FunctionComponent = () => {
    const avtaleContext = useContext(AvtaleContext);
    const erLåst = avtaleContext.avtale.godkjentAvVeileder !== null;

    return (
        <>
            {!erLåst && <Normaltekst>Når du godkjenner avtalen godtar du kravene fra NAV</Normaltekst>}
            <VeilederpanelMedUtklippstavleIkon>
                <>
                    <VerticalSpacer rem={2} />
                    <IkonTekstRad
                        svgIkon={<RettighetsHammerIkon />}
                        headerTekst={{
                            tekst: 'Ditt forhold til arbeidsmiljøloven',
                        }}
                    >
                        <VerticalSpacer rem={0.5} />
                        <>
                            Når du deltar på tiltak med lønnstilskudd er du en vanlig ansatt, som vil si at din
                            arbeidsgiver må følge arbeidsmiljølovens regler. Arbeidsgiver må også forsikre deg og
                            arbeidsgiver har et ansvar for deg hvis du blir skadet på jobb.
                        </>
                    </IkonTekstRad>
                </>

                <IkonTekstRad
                    svgIkon={<Bandage width="2.25rem" height="2.25rem" />}
                    headerTekst={{
                        tekst: 'Gi beskjed hvis du er borte fra jobb',
                    }}
                >
                    <VerticalSpacer rem={0.5} />
                    Du må melde fra til arbeidsgiver ved fravær. Ved egen eller barns sykdom gjelder ordinære regler for
                    bruk av egenmelding også for deg som er på tiltak med lønnstilskudd.
                </IkonTekstRad>

                <IkonTekstRad
                    svgIkon={<Passport width="2.25rem" height="2.25rem" />}
                    headerTekst={{ tekst: 'Behandling av personopplysninger' }}
                >
                    <p>
                        Du kan ikke sende taushetsbelagte og sensitive personopplysninger til NAV på usikret epost. Skal
                        du gi beskjed om endringer som har betydning for saken og oppfølgingen din fra NAV, kan du bruke{' '}
                        <EksternLenke href="https://www.nav.no/person/dittnav/">Ditt NAV</EksternLenke>
                        eller{' '}
                        <EksternLenke href="https://www.nav.no/person/kontakt-oss/nb/skriv-til-oss">
                            Skriv til oss
                        </EksternLenke>
                        .
                    </p>
                    <p>Personopplysninger om deg i avtalen lagres i henhold til arkivloven.</p>
                    <p>
                        <EksternLenke href="https://www.nav.no/no/nav-og-samfunn/om-nav/personvern-i-arbeids-og-velferdsetaten/personvernerklaering-for-arbeids-og-velferdsetaten">
                            NAVs personvernerklæring
                        </EksternLenke>{' '}
                        forteller mer om hvordan NAV behandler personopplysninger og hvilke rettigheter du har.
                    </p>
                    <p>12 uker etter avsluttet tiltak vil arbeidsgiver ikke lenger har tilgang til avtalen.</p>
                </IkonTekstRad>
            </VeilederpanelMedUtklippstavleIkon>
        </>
    );
};

export default DeltakerMidlertidigLonnstilskuddInstruks;
