'use client';

import { useEffect, useState } from 'react';
import type { Move as MoveModel } from '@prisma/client';
import {
    parseTekkenNotation,
    TekkenCombo,
    TekkenMove,
} from '@tekken-space/notation-parser';

import Move from '@/components/move';
import TsTag from '@/ui/tags/tag';

interface Props {
    move?: MoveModel;
    notation: string;
    onDelete?: (combo: MoveModel) => Promise<void>;
    onEdit?: (combo: MoveModel) => Promise<void>;
}

export default function SingleMove(props: Props) {
    const [move, setMove] = useState<TekkenCombo | null>(null);

    useEffect(() => {
        let nextMove = move;

        try {
            nextMove = parseTekkenNotation(props.notation);
        } catch (error: any) {
            // TODO: handle syntax errors emitted by antlr.
        }

        setMove(nextMove);
    }, [props.notation]);

    return (
        <div className="mb-4 bg-black/20 pl-5 pr-2 pt-2 pb-4">
            <div className="flex w-full items-center justify-between">
                <div className="font-bold text-zinc-200">
                    {props.move?.name}
                </div>
            </div>

            <div className="flex min-h-[5.5rem] flex-wrap gap-y-2 py-4">
                {move !== null &&
                    move.moves.map((move: TekkenMove, index: number) => {
                        return (
                            <Move
                                key={index}
                                move={move}
                            />
                        );
                    })}
            </div>

            <div className="flex items-center gap-2 text-zinc-50">
                {props.move?.isThrow && <TsTag>Throw</TsTag>}

                {props.move?.damage && (
                    <TsTag color={'red'}>{props.move?.damage} Damage</TsTag>
                )}

                {props.move?.hitLevels && (
                    <TsTag>
                        {props.move?.hitLevels.length} Hit
                        {props.move?.hitLevels.length > 1 ? 's' : ''}
                    </TsTag>
                )}
            </div>
        </div>
    );
}
