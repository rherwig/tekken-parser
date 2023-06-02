import { Character } from '@prisma/client';

import CreateCharacterForm from '@/components/characters/create-character-form';
import TsBaseDialog from '@/ui/dialogs/base-dialog';

interface Props {
    isOpen: boolean;
    onSuccess: (character: Character) => void;
    onClose: () => void;
}

export default function CreateCharacterModal(props: Props) {
    return (
        <TsBaseDialog
            title={'Add Character'}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <CreateCharacterForm
                onSuccess={props.onSuccess}
                onClose={props.onClose}
            />
        </TsBaseDialog>
    );
}
