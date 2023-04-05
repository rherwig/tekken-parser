import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '@/assets/css/main.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
