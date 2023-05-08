import { getServerSession } from 'next-auth';

import { CharactersService } from '@/server/services/characters-service';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

interface Params {
    slug: string;
}

interface Props {
    params: Params;
}

export default async function CharacterDetailsPage(props: Props) {
    const session = await getServerSession(authOptions);
    const character = await CharactersService.findBySlug(props.params.slug);

    if (!character) {
        return null;
    }

    return (
        <div>
            {/*<CombosList*/}
            {/*    session={session}*/}
            {/*    character={character}*/}
            {/*    combos={character.combos}*/}
            {/*/>*/}
        </div>
    );
}
