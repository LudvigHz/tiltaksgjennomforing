import { AvtaleContext } from '@/AvtaleProvider';
import SkjemaTittel from '@/komponenter/form/SkjemaTittel';
import Innholdsboks from '@/komponenter/Innholdsboks/Innholdsboks';
import LagreKnapp from '@/komponenter/LagreKnapp/LagreKnapp';
import VerticalSpacer from '@/komponenter/layout/VerticalSpacer';
import PakrevdInput from '@/komponenter/PakrevdInput/PakrevdInput';
import PakrevdTextarea from '@/komponenter/PakrevdTextarea/PakrevdTextarea';
import { Column, Container, Row } from 'nav-frontend-grid';
import React, { useContext } from 'react';
import {Input} from "nav-frontend-skjema";
import TelefonnummerInput from "@/komponenter/TelefonnummerInput/TelefonnummerInput";

const OmMentorSteg = () => {
    const avtaleContext = useContext(AvtaleContext);
    const sjekkOgSettVerdi = (verdi: string | number | undefined): number | undefined => {
        if (!isNaN(Number(verdi))) {
            return Number(verdi);
        }
    };

    return (
        <Innholdsboks utfyller="veileder">
            <SkjemaTittel>Om mentoren</SkjemaTittel>
            <Container fluid={true}>
              <Row className={""}>
                <Column md="6">
                  <div className={"rad"}>
                  <Input label="Fødselsnummer" value={avtaleContext.avtale.mentorFnr} disabled={true} />
                </div>
                </Column>
              </Row>
              <VerticalSpacer rem={1} />
                <Row className="rad">
                    <Column md="6">
                        <PakrevdInput
                            label="Fornavn"
                            verdi={avtaleContext.avtale.gjeldendeInnhold.mentorFornavn}
                            settVerdi={(verdi) => avtaleContext.settAvtaleInnholdVerdi('mentorFornavn', verdi)}
                        />
                    </Column>
                    <Column md="6">
                        <PakrevdInput
                            label="Etternavn"
                            verdi={avtaleContext.avtale.gjeldendeInnhold.mentorEtternavn}
                            settVerdi={(verdi) => avtaleContext.settAvtaleInnholdVerdi('mentorEtternavn', verdi)}
                        />
                    </Column>
                </Row>
              <VerticalSpacer rem={1} />
              <Row className={"rad"}>
                <Column md="6">
                  <TelefonnummerInput
                      label="Telefonnummer"
                      verdi={avtaleContext.avtale.gjeldendeInnhold.mentorTlf}
                      settVerdi={(verdi) => avtaleContext.settAvtaleInnholdVerdi('mentorTlf', verdi)}
                  />
                </Column>
              </Row>
            </Container>
            <VerticalSpacer rem={1} />
            <Container fluid={true}>
                <PakrevdTextarea
                    label="Arbeidsoppgaver til mentor"
                    verdi={avtaleContext.avtale.gjeldendeInnhold.mentorOppgaver}
                    settVerdi={(verdi) => avtaleContext.settAvtaleInnholdVerdi('mentorOppgaver', verdi)}
                    maxLengde={1000}
                    feilmelding="Beskrivelse av arbeidsoppgaver er påkrevd"
                />
            </Container>
            <VerticalSpacer rem={2} />
            <Container fluid={true}>
                <Row className="begge__tekst">
                    <Column md="6">
                        <PakrevdInput
                            label="Antall timer med mentor"
                            verdi={avtaleContext.avtale.gjeldendeInnhold.mentorAntallTimer}
                            settVerdi={(verdi) =>{
                                avtaleContext.settAvtaleInnholdVerdi('mentorAntallTimer', sjekkOgSettVerdi(verdi))
                            }
                            }
                        />
                    </Column>
                    <Column md="6">
                        <PakrevdInput
                            label="Timelønn"
                            verdi={avtaleContext.avtale.gjeldendeInnhold.mentorTimelonn}
                            settVerdi={(verdi) =>
                                avtaleContext.settAvtaleInnholdVerdi('mentorTimelonn', sjekkOgSettVerdi(verdi))
                            }
                        />
                    </Column>
                </Row>
            </Container>
            <VerticalSpacer rem={2} />
            <LagreKnapp lagre={avtaleContext.lagreAvtale} label={'Lagre'} suksessmelding={'Avtale lagret'} />
        </Innholdsboks>
    );
};

export default OmMentorSteg;
