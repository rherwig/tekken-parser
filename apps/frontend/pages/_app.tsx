import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '@/assets/css/main.scss';
import TheHeader from '@/layouts/components/header/the-header';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <TheHeader />
            <Component {...pageProps} />
        </SessionProvider>
    );
}
