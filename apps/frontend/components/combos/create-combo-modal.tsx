import { Combo } from '@prisma/client';

import CreateComboForm from '@/components/combos/create-combo-form';
import TsBaseDialog from '@/ui/dialogs/base-dialog';

interface Props {
    characterId: string;
    initialValues?: Combo;
    isOpen: boolean;
    onSuccess: (combo: Combo) => void;
    onClose: () => void;
}

export default function CreateComboModal(props: Props) {
    const title = props.initialValues?.id ? 'Edit Combo' : 'Create Combo';

    return (
        <TsBaseDialog
            title={title}
            isOpen={props.isOpen}
            onClose={props.onClose}
            className={'max-w-4xl'}
        >
            <CreateComboForm
                characterId={props.characterId}
                initialValues={props.initialValues}
                onSuccess={props.onSuccess}
                onClose={props.onClose}
            />
        </TsBaseDialog>
    );
}
