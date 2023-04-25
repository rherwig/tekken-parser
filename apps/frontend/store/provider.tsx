'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

interface Props {
    children: ReactNode;
}

/**
 * This is a wrapper around the Redux store that provides the store to the rest of the app.
 * @param {Props} props
 * @constructor
 */
export default function AppStoreProvider(props: Props) {
    return <Provider store={store}>{props.children}</Provider>;
}
