import TsBaseDialog from '@/ui/dialogs/base-dialog';

interface Props {
    title?: string;
    content: string;
    isOpen: boolean;
    onConfirm: (data: any) => void;
    onCancel: () => void;
}

export default function DeleteConfirmationDialog(props: Props) {
    return (
        <TsBaseDialog
            title={'Delete'}
            isOpen={props.isOpen}
            onClose={props.onCancel}
        >
            {props.content}

            <div className="mt-4">
                <button
                    type={'button'}
                    onClick={props.onConfirm}
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                    Delete
                </button>

                <button
                    type={'button'}
                    onClick={props.onCancel}
                    className={
                        'ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                    }
                >
                    Cancel
                </button>
            </div>
        </TsBaseDialog>
    );
}
