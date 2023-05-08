'use client';

import { ReactNode } from 'react';
import { Tab } from '@headlessui/react';

interface Props {
    children: ReactNode;
}

export default function CharacterDetails(props: Props) {
    return (
        <div>
            <Tab.Group>
                <Tab.List>
                    <Tab>Tab 1</Tab>
                    <Tab data-headlessui-state="selected">Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            {props.children}
        </div>
    );
}
