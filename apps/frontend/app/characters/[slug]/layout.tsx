import { ReactElement } from 'react';

import ContainerLayout from '@/components/layouts/container-layout';
import { CharactersService } from '@/server/services/characters-service';
import TsTab from '@/ui/tabs/tab';

interface Params {
    slug: string;
}

interface Props {
    children: ReactElement;
    params: Params;
}

export default async function CharacterLayout(props: Props) {
    const character = await CharactersService.findBySlug(props.params.slug);

    if (!character) {
        return null;
    }

    return (
        <ContainerLayout>
            <h2 className={'text-zinc-300'}>Character</h2>
            <h1 className={'mb-8 text-3xl'}>{character.name}</h1>

            <div>
                <div className="mb-4 grid grid-cols-3 gap-4">
                    <TsTab
                        segment={'combos'}
                        href={`/characters/${character.slug}/combos`}
                    >
                        Combos
                    </TsTab>

                    <TsTab
                        segment={'moves'}
                        href={`/characters/${character.slug}/moves`}
                    >
                        Moves
                    </TsTab>
                </div>

                {props.children}
            </div>
        </ContainerLayout>
    );
}
