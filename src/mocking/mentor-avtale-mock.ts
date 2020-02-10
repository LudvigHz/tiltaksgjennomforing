import { Avtale, MentorAvtaleinnhold } from '@/types/avtale';

const mentorAvtaleMock: Avtale<MentorAvtaleinnhold> = {
    id: '6565e74d-66f3-44a1-8a3c-91fae6b450d3',
    opprettetTidspunkt: '',
    sistEndret: '',

    godkjentAvDeltaker: false,
    godkjentAvArbeidsgiver: false,
    godkjentAvVeileder: false,
    erLaast: false,
    status: '',
    kanAvbrytes: true,
    kanLåsesOpp: false,
    versjon: 1,
    versjoner: [],
    avbrutt: false,
    godkjentPaVegneAv: false,

    godkjentPaVegneGrunn: {
        ikkeBankId: false,
        reservert: false,
        digitalKompetanse: false,
    },

    oppfolging: 'Bruker og AG skal følges opp.',
    tilrettelegging: 'AG skal tilrettelegge.',

    startDato: '89',
    sluttDato: '79',
    stillingprosent: 99,

    veilederNavIdent: 'Z123456',
    veilederFornavn: 'Nave',
    veilederEtternavn: 'Naversen',
    veilederTlf: '88888888',

    bedriftNavn: 'Arbeids AS',
    bedriftNr: '12345678',

    deltakerFornavn: 'Deltakeren',
    deltakerEtternavn: 'Deltakerensen',
    deltakerFnr: '00000000000',
    deltakerTlf: '54444444',

    arbeidsgiverFornavn: 'Arbeidsgivers',
    arbeidsgiverEtternavn: 'Arbeidsgiverssen',
    arbeidsgiverTlf: '87777777',
    tiltakstype: 'MIDLERTIDIG_LONNSTILSKUDD',

    mentorFornavn: 'Mentoren',
    mentorEtternavn: 'Mentorsen',
    mentorOppgaver: 'Mentorgreier',
    mentorAntallTimer: 20,
    mentorTimelonn: 200,
};

export default mentorAvtaleMock;
