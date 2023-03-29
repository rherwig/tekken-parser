import type { AppProps } from 'next/app';

import 'bulma/css/bulma.css';
import '@/assets/css/main.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
