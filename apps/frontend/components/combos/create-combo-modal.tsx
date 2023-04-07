import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Combo } from '@prisma/client';

import CreateComboForm from '@/components/combos/create-combo-form';

interface Props {
    characterId: string;
    isOpen: boolean;
    onSuccess: (combo: Combo) => void;
    onClose: () => void;
}

export default function CreateComboModal(props: Props) {
    return (
        <Transition
            appear
            show={props.isOpen}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="relative z-10"
                onClose={props.onClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left align-middle shadow-xl shadow-black/10 transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-zinc-50"
                                >
                                    Create Combo
                                </Dialog.Title>

                                <div className="mt-6">
                                    <CreateComboForm
                                        characterId={props.characterId}
                                        onSuccess={props.onSuccess}
                                        onClose={props.onClose}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
