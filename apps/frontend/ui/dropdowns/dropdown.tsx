import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2';
import clsx from 'classnames';

export interface DropdownOption {
    label: string;
    value: any;
}

interface Props {
    options: DropdownOption[];
    selected: DropdownOption;
    onChange: (option: DropdownOption) => void;
    className?: string;
}

export default function TsDropdown(props: Props) {
    return (
        <Listbox
            value={props.selected}
            onChange={props.onChange}
        >
            <div className={clsx('relative', props.className)}>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-black/20 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">
                        {props.selected.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <HiChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-black/20 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {props.options.map((option, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 px-4 ${
                                        active
                                            ? 'bg-primary text-copy'
                                            : 'text-gray-900'
                                    }`
                                }
                                value={option}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                            }`}
                                        >
                                            {option.label}
                                        </span>
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
