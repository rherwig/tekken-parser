import HeaderLink from '@/layouts/components/header/header-link';

export default function TheHeader() {
    return (
        <header className="mb-8 h-20 shadow-md">
            <div className="container flex h-full justify-between">
                <div className="flex h-full">
                    <div className="-ml-8 h-full">
                        <HeaderLink href={'/'}>TekkenTools</HeaderLink>
                    </div>
                    <nav className="h-full">
                        <ul className="h-full">
                            <li className="flex h-full">
                                <HeaderLink href={'/characters'}>
                                    Characters
                                </HeaderLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex h-full">
                    <nav className="h-full">
                        <ul className="h-full">
                            <li className="flex h-full"></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
