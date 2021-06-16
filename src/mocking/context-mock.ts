import { Context } from '@/AvtaleProvider';
import { Avslagsårsaker, Avtale } from '@/types/avtale';

const avtaleInnhold: Avtale = {
    arbeidsgiverEtternavn: '',
    arbeidsgiverFornavn: '',
    arbeidsgiverKontonummer: '',
    arbeidsgiverTlf: '',
    arbeidsgiveravgift: 1,
    arbeidsgiveravgiftBelop: 100,
    bedriftNavn: '',
    deltakerEtternavn: '',
    deltakerFornavn: '',
    deltakerTlf: '',
    feriepengerBelop: 1,
    feriepengesats: 100,
    harFamilietilknytning: false,
    maal: [{ beskrivelse: '', kategori: 'ANNET', id: '' }],
    mentorAntallTimer: 1,
    mentorEtternavn: '',
    mentorFornavn: '',
    mentorOppgaver: '',
    mentorTimelonn: 1,
    oppfolging: '',
    otpBelop: 1,
    sluttDato: '',
    startDato: '',
    stillingprosent: 1,
    sumLonnstilskudd: 1,
    sumLonnsutgifter: 111,
    tilskuddPeriode: [
        {
            løpenummer: 1,
            beløp: 10000,
            id: '123123',
            startDato: '',
            sluttDato: '',
            godkjentTidspunkt: '',
            status: 'UBEHANDLET',
            avslagsårsaker: new Set<Avslagsårsaker>(),
            lonnstilskuddProsent: 60,
            kanBesluttesFom: '2021-01-01',
            aktiv: true,
        },
    ],
    tilrettelegging: '',
    veilederEtternavn: '',
    veilederFornavn: '',
    veilederTlf: '',
    avbrutt: false,
    avbruttDato: '',
    avbruttGrunn: '',
    bedriftNr: '',
    deltakerFnr: '',
    erLaast: false,
    erUfordelt: false,
    godkjentAvArbeidsgiver: '',
    godkjentAvDeltaker: '',
    godkjentAvVeileder: '',
    godkjentPaVegneAv: false,
    id: '',
    kanAvbrytes: true,
    kanGjenopprettes: false,
    kanLåsesOpp: false,
    opprettetTidspunkt: '',
    sistEndret: '',
    status: 'PÅBEGYNT',
    tiltakstype: 'ARBEIDSTRENING',
    veilederNavIdent: '',
    beslutterNavIdent: '',
    versjoner: [],
    statusSomEnum: 'GJENNOMFØRES',
    felterSomIkkeErFyltUt: [],
};

export const contextMock: Context = {
    avtale: avtaleInnhold,
    settOgKalkulerBeregningsverdier: () => Promise.resolve(),
    settAvtaleVerdi: () => null,
    settAvtaleVerdier: () => undefined,
    hentAvtale: () => Promise.resolve(),
    annullerAvtale: () => Promise.resolve(),
    avbrytAvtale: () => Promise.resolve(),
    lagreAvtale: () => Promise.resolve(),
    overtaAvtale: () => Promise.resolve(),
    laasOpp: () => Promise.resolve(),
    gjenopprettAvtale: () => Promise.resolve(),
    utforHandlingHvisRedigerbar: () => Promise.resolve(),
    lagreMaal: () => Promise.resolve(),
    slettMaal: () => Promise.resolve(),
    endretSteg: () => Promise.resolve(),
    godkjenn: () => Promise.resolve(),
    godkjennTilskudd: () => Promise.resolve(),
    avslåTilskudd: () => Promise.resolve(),
    godkjennPaVegneAvDeltaker: () => Promise.resolve(),
    godkjennPaVegneAvArbeidsgiver: () => Promise.resolve(),
    godkjennPaVegneAvDeltakerOgArbeidsgiver: () => Promise.resolve(),
    ulagredeEndringer: false,
    mellomLagring: undefined,
    setMellomLagring: () => null,
    sendTilbakeTilBeslutter: () => Promise.resolve(),
};
