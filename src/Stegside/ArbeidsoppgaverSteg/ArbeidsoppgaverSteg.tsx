import * as React from 'react';
import { Ingress, Innholdstittel } from 'nav-frontend-typografi';
import { Context, medContext } from '../AvtaleContext';
import Innholdsboks from '../../komponenter/Innholdsboks/Innholdsboks';

const ArbeidsoppgaverSteg = (props: Context) => (
    <Innholdsboks>
        <Innholdstittel tag="h2">
            Beskriv arbeidsoppgavene som skal utføres
        </Innholdstittel>
        <Ingress>
            Her skal du beskrive hvilke arbeidsoppgaver som deltakeren skal
            utføre hos dere under arbeidstreningen.
        </Ingress>
    </Innholdsboks>
);

export default medContext(ArbeidsoppgaverSteg);