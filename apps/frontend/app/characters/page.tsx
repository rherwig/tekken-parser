import ContainerLayout from '@/components/layouts/container-layout';
import CharactersGrid from '@/components/characters/characters-grid';

export const metadata = {
    title: 'Characters | Tekken Space',
};

/**
 * The characters overview page.
 * @route /characters
 * @constructor
 */
export default function CharactersIndex() {
    return (
        <ContainerLayout>
            <CharactersGrid />
        </ContainerLayout>
    );
}
