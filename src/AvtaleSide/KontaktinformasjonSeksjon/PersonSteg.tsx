import PanelBase from 'nav-frontend-paneler';
import { Input, SkjemaGruppe } from 'nav-frontend-skjema';
import * as React from 'react';
import AvtaleProps from '../AvtaleProps';
import StegProps from '../StegProps';

const PersonSteg = (props: AvtaleProps & StegProps) => (
    <PanelBase>
        <SkjemaGruppe title={'Opplysninger om person'}>
            <Input
                label={'Fødselsnummer'}
                bredde={'M'}
                onChange={(event: any) =>
                    props.endreVerdi('personfnr', event.target.value)
                }
            />
            <Input
                label={'Navn'}
                bredde={'XL'}
                onChange={(event: any) =>
                    props.endreVerdi('personnavn', event.target.value)
                }
            />
            <Input
                label={'Telefon'}
                bredde={'M'}
                type={'tel'}
                onChange={(event: any) =>
                    props.endreVerdi('persontlf', event.target.value)
                }
            />
        </SkjemaGruppe>
    </PanelBase>
);

export default PersonSteg;
