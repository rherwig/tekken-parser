import { Combo } from '@prisma/client';

import CreateComboForm from '@/components/combos/create-combo-form';
import TsBaseDialog from '@/ui/dialogs/base-dialog';

interface Props {
    characterId: string;
    isOpen: boolean;
    onSuccess: (combo: Combo) => void;
    onClose: () => void;
}

export default function CreateComboModal(props: Props) {
    return (
        <TsBaseDialog
            title={'Create Combo'}
            isOpen={props.isOpen}
            onClose={props.onClose}
            className={'max-w-4xl'}
        >
            <CreateComboForm
                characterId={props.characterId}
                onSuccess={props.onSuccess}
                onClose={props.onClose}
            />
        </TsBaseDialog>
    );
}
