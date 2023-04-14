import ContainerLayout from '@/layouts/container-layout';
import CharactersGrid from '@/components/characters/characters-grid';
import { CharactersService } from '@/services/characters-service';

export default async function CharactersIndex() {
    const characters = await CharactersService.findAll();

    return (
        <ContainerLayout>
            <CharactersGrid characters={characters} />
        </ContainerLayout>
    );
}
