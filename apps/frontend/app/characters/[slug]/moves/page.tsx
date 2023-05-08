import { getServerSession } from 'next-auth';

import ContainerLayout from '@/components/layouts/container-layout';
import { CharactersService } from '@/server/services/characters-service';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import MovesList from '@/components/moves/moves-list';

interface Params {
    slug: string;
}

interface Props {
    params: Params;
}

export default async function CharacterMovesPage(props: Props) {
    const session = await getServerSession(authOptions);
    const character = await CharactersService.findBySlug(props.params.slug);

    if (!character) {
        return null;
    }

    return (
        <MovesList
            session={session}
            character={character}
            moves={character.moves}
        />
    );
}
