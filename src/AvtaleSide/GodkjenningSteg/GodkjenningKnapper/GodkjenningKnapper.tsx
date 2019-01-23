import * as React from 'react';
import Innholdsboks from '../../../komponenter/Innholdsboks/Innholdsboks';
import { Avtale } from '../../avtale';
import KnappOgEtikett from './KnappOgEtikett/KnappOgEtikett';
import { Systemtittel } from 'nav-frontend-typografi';
import './GodkjenningKnapper.less';

interface Props {
    avtale: Avtale;
    bekreftBrukerOnClick: () => void;
    bekreftArbeidsgiverOnClick: () => void;
    bekreftVeilederOnClick: () => void;
}

const GodkjenningKnapper = (props: Props) => {
    return (
        <Innholdsboks>
            <Systemtittel className="godkjenningknapper__tittel">
                Godkjenning av avtale
            </Systemtittel>
            <KnappOgEtikett
                godkjent={props.avtale.bekreftetAvBruker}
                knappTekst="Bruker"
                onClick={props.bekreftBrukerOnClick}
            />
            <KnappOgEtikett
                godkjent={props.avtale.bekreftetAvArbeidsgiver}
                knappTekst="Arbeidsgiver"
                onClick={props.bekreftArbeidsgiverOnClick}
            />
            <KnappOgEtikett
                godkjent={props.avtale.bekreftetAvVeileder}
                knappTekst="NAV"
                onClick={props.bekreftVeilederOnClick}
            />
        </Innholdsboks>
    );
};

export default GodkjenningKnapper;