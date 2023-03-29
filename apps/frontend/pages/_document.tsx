import { Html, Head, Main, NextScript } from 'next/document';
import { Container, Content, Footer } from 'react-bulma-components';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <Footer>
                    <Container>
                        <Content>&copy; 2023</Content>
                    </Container>
                </Footer>
                <NextScript />
            </body>
        </Html>
    );
}
