import type { AppProps } from 'next/app';

import 'bulma/css/bulma.css';
import '@/assets/css/main.scss';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
