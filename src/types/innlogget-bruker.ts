import { TiltaksType } from '@/types/avtale';
import { Organisasjon as AltinnOrganisasjon } from '@navikt/bedriftsmeny';

export interface Innloggingskilde {
    tittel: string;
    part: string;
    url: string;
}

export interface NavEnhet {
    verdi: string;
    navn: string;
}

export type Tilganger = { [bedriftNr: string]: TiltaksType[] };

export type Rolle = 'DELTAKER' | 'ARBEIDSGIVER' | 'VEILEDER' | 'MENTOR' | 'BESLUTTER' | 'INGEN_ROLLE';

export interface InnloggetBruker {
    identifikator: string;
    erNavAnsatt: boolean;
    navn?: string; // veileder navn
    altinnOrganisasjoner: AltinnOrganisasjon[];
    rolle: Rolle;
    tilganger: Tilganger;
    navEnheter: NavEnhet[];
    kanVæreBeslutter?: boolean;
}

export interface Organisasjon {
    bedriftNavn: string;
    bedriftNr: string;
    tilgangstyper: TiltaksType[];
}
