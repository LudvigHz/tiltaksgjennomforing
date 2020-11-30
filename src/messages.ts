import { Avtaleinnhold, Stillingstype, TiltaksType } from './types/avtale';
import { HendelseType } from './types/hendelse';

export const messages = {
    FÅ_JOBB_I_BEDRIFTEN: 'Få jobb i bedriften',
    ARBEIDSERFARING: 'Arbeidserfaring',
    UTPRØVING: 'Utprøving',
    SPRÅKOPPLÆRING: 'Språkopplæring',
    OPPNÅ_FAGBREV_KOMPETANSEBEVIS: 'Oppnå fagbrev/kompetansebevis',
    ANNET: 'Annet',
};

export const avtaleFelterBokmal: { [key in keyof Avtaleinnhold]: string } = {
    arbeidsgiverEtternavn: 'arbeidsgivers etternavn',
    arbeidsgiverFornavn: 'arbeidsgivers fornavn',
    arbeidsgiverKontonummer: 'arbeidsgivers kontonummer',
    arbeidsgiverTlf: 'arbeidsgivers telefonnummer',
    arbeidsgiveravgift: 'arbeidsgiveravgift',
    arbeidsoppgaver: 'arbeidsoppgaver',
    bedriftNavn: 'bedriftnavn',
    deltakerEtternavn: 'deltakers etternavn',
    deltakerFornavn: 'deltakers fornavn',
    deltakerTlf: 'deltakers telefonnummer',
    feriepengesats: 'feriepengesats',
    lonnstilskuddProsent: 'lønnstilskuddprosent',
    maal: 'mål',
    manedslonn: 'månedslønn',
    mentorAntallTimer: 'antall timer med mentor',
    mentorEtternavn: 'mentors etternavn',
    mentorFornavn: 'mentors fornavn',
    mentorOppgaver: 'mentors oppgaver',
    mentorTimelonn: 'mentors timelønn',
    oppfolging: 'oppfølging',
    sluttDato: 'sluttdato',
    startDato: 'startdato',
    tilskuddPeriode: 'tilskuddPeriode',
    stillingprosent: 'stillingsprosent',
    stillingstittel: 'stillingstittel',
    tilrettelegging: 'tilrettelegging',
    veilederEtternavn: 'veileders etternavn',
    veilederFornavn: 'veileders fornavn',
    veilederTlf: 'veileders telefonnummer',
    harFamilietilknytning: 'har deltaker familietilknytning til arbeidsgiver',
    familietilknytningForklaring: 'forklaring på familietilknytning',
    feriepengerBelop: 'feriepenger opptjent',
    otpBelop: 'obligatorisk tjenestepensjon',
    arbeidsgiveravgiftBelop: 'arbeidsgiveravgift beløp',
    sumLonnsutgifter: 'sum utgifter til lønnstilskudd',
    sumLonnstilskudd: 'sum beløp til utbetaling',
    stillingKonseptId: '',
    stillingStyrk08: '',
};

export const hendelseTekst: { [key in HendelseType]: string } = {
    OPPRETTET: 'Avtale opprettet',
    OPPRETTET_AV_ARBEIDSGIVER: 'Avtale opprettet',
    GODKJENT_AV_VEILEDER: 'Avtale er godkjent av NAV-veileder',
    GODKJENT_AV_ARBEIDSGIVER: 'Avtale er godkjent av arbeidsgiver',
    GODKJENT_AV_DELTAKER: 'Avtale er godkjent av deltaker',
    GODKJENT_PAA_VEGNE_AV: 'Avtalen ble godkjent på vegne av deltaker',
    GODKJENNINGER_OPPHEVET_AV_ARBEIDSGIVER: 'Avtalens godkjenninger er opphevet',
    GODKJENNINGER_OPPHEVET_AV_VEILEDER: 'Avtalens godkjenninger er opphevet',
    DELT_MED_ARBEIDSGIVER: 'Avtale delt med arbeidsgiver',
    DELT_MED_DELTAKER: 'Avtale delt med deltaker',
    AVBRUTT: 'Avtale avbrutt av veileder',
    LÅST_OPP: 'Avtale låst opp av veileder',
    ENDRET: 'Avtale endret',
    SMS_VARSLING_FEILET: 'Varsling på SMS har feilet',
    GJENOPPRETTET: 'Avtale gjenopprettet',
    NY_VEILEDER: 'Avtale tildelt ny veileder',
    AVTALE_FORDELT: 'Avtale tildelt veileder',
};

export const tiltakstypeTekst: { [key in TiltaksType]: string } = {
    ARBEIDSTRENING: 'Arbeidstrening',
    MIDLERTIDIG_LONNSTILSKUDD: 'Midlertidig lønnstilskudd',
    VARIG_LONNSTILSKUDD: 'Varig lønnstilskudd',
    MENTOR: 'Mentor',
};

export const stillingstype: { [key in Stillingstype]: string } = {
    FAST: 'Fast',
    MIDLERTIDIG: 'Midlertidig',
};
