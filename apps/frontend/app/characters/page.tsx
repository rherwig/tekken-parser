import ContainerLayout from '@/components/layouts/container-layout';
import CharactersGrid from '@/components/characters/characters-grid';
import { store } from '@/store';

export const metadata = {
    title: 'Characters | Tekken Space',
};

/**
 * The characters overview page.
 * @route /characters
 * @constructor
 */
export default async function CharactersIndex() {
    const characters = store.getState().characters.all;

    return (
        <ContainerLayout>
            <CharactersGrid characters={characters} />
        </ContainerLayout>
    );
}
