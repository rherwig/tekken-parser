import { Html, Head, Main, NextScript } from 'next/document';

import TheHeader from '@/layouts/components/header/the-header';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <TheHeader />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
