import * as React from 'react';
import { FunctionComponent } from 'react';
import { ReactComponent as CheckIkon } from '@/assets/ikoner/check.svg';
import { ReactComponent as PabegyntIkon } from '@/assets/ikoner/pabegynt.svg';
import { ReactComponent as ProblemIkon } from '@/assets/ikoner/varsel.svg';
import { ReactComponent as InaktivIkon } from '@/assets/ikoner/inaktiv.svg';
import { ReactComponent as AvbruttIkon } from '@/assets/ikoner/stop.svg';
import { ReactComponent as GjennomforesIkon } from '@/assets/ikoner/gjennomfores.svg';
import { Rolle } from '@/AvtaleContext';

const StatusIkon: FunctionComponent<{
    status: string;
    rolle?: Rolle;
    godkjentAvInnloggetBruker?: boolean;
    andrePartnerHarGodkjent?: boolean;
} & React.SVGProps<SVGSVGElement>> = props => {
    switch (props.status) {
        case 'Påbegynt':
            return <PabegyntIkon {...props} />;
        case 'Klar for oppstart':
            return <CheckIkon {...props} />;
        case 'Mangler godkjenning':
            if (props.godkjentAvInnloggetBruker || (props.rolle === 'VEILEDER' && !props.andrePartnerHarGodkjent)) {
                return <PabegyntIkon {...props} />;
            } else {
                return <ProblemIkon {...props} />;
            }
        case 'Avbrutt':
            return <AvbruttIkon {...props} />;
        case 'Avsluttet':
            return <InaktivIkon {...props} />;
        case 'Gjennomføres':
            return <GjennomforesIkon {...props} />;
        default:
            return null;
    }
};

export default StatusIkon;
