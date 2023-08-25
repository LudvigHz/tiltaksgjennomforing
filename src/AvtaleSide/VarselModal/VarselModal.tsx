import { AvtaleContext } from '@/AvtaleProvider';
import { ReactComponent as InfoIkonGul } from '@/assets/ikoner/info-ikon-gul.svg';
import { Modal, BodyShort, Heading } from '@navikt/ds-react';
import LagreKnapp from '@/komponenter/LagreKnapp/LagreKnapp';
import VerticalSpacer from '@/komponenter/layout/VerticalSpacer';
import * as RestService from '@/services/rest-service';
import { Varsel } from '@/types/varsel';
import BEMHelper from '@/utils/bem';
import { Button } from '@navikt/ds-react';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import VarselTabell from '../Varsellogg/VarselTabell';
import './VarselModal.less';

const cls = BEMHelper('varsel-modal');

const VarselModal: FunctionComponent = () => {
    const [varselModalApen, setVarselModalApen] = useState(false);
    const [varsler, setVarsler] = useState<Varsel[]>([]);
    const { avtale } = useContext(AvtaleContext);

    const harOpprettetHendelse =
        varsler.find((v) => v.hendelseType === 'OPPRETTET' || v.hendelseType === 'OPPRETTET_AV_ARBEIDSGIVER') !==
        undefined;

    useEffect(() => {
        RestService.hentUlesteBjelleVarslerForAvtale(avtale.id).then((hentedeVarsler) => {
            if (hentedeVarsler.length > 0) {
                setVarselModalApen(true);
            }
            setVarsler(hentedeVarsler);
        });
    }, [avtale.id]);

    const lukkOgLesVarsler = async () => {
        const varselIder = varsler.map((v) => v.id);
        await RestService.settAlleVarselerTilLest(varselIder);
        setVarselModalApen(false);
    };

    const lukkeOgSeHendelselogg = async () => {
        await lukkOgLesVarsler();
        document.getElementById('varsellogglenke')?.click();
    };

    return (
        <Modal
            open={varselModalApen}
            aria-label="varselmodal"
            onClose={lukkOgLesVarsler}
            className={cls.element('modal')}
        >
            <InfoIkonGul height="80px" width="80px" style={{ margin: '-72px auto 1rem auto' }} />
            <Heading size="medium">{harOpprettetHendelse ? 'Hendelselogg' : 'Nye hendelser'}</Heading>
            <VerticalSpacer rem={1} />
            <BodyShort size="small">
                {harOpprettetHendelse
                    ? 'Tabellen under viser hendelser som har skjedd på avtalen. '
                    : 'Tabellen under viser hendelser som har skjedd siden sist gang du åpnet avtalen. '}
                Hendelseloggen finner du igjen under menyen på toppen av avtalen.
            </BodyShort>
            <VerticalSpacer rem={2} />
            <VarselTabell varsler={varsler} />
            <VerticalSpacer rem={2} />
            <div>
                <LagreKnapp lagre={lukkOgLesVarsler} label="Lukk" />
                {!harOpprettetHendelse && (
                    <Button style={{ marginLeft: '1rem' }} variant="secondary" onClick={lukkeOgSeHendelselogg}>
                        Se alle hendelser for denne avtalen
                    </Button>
                )}
            </div>
        </Modal>
    );
};

export default VarselModal;
