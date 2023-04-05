import { FC } from 'react';
import type { Combo as ComboModel } from '@prisma/client';
import { parse } from '@tekken-tools/parser';

import Move from '@/components/move';

interface Props {
    combo?: ComboModel;
    notation: string;
}

const Combo: FC<Props> = (props) => {
    const combo = parse(props.notation);

    return (
        <div className="mb-4 bg-black/10">
            <div className="min-h-8 flex w-full items-center justify-between bg-black/10 px-4 py-2"></div>

            <div className="flex p-4">
                {combo.moves.map((move, index) => {
                    return (
                        <Move
                            key={index}
                            move={move}
                        />
                    );
                })}
            </div>

            <div className="min-h-8 flex items-center gap-2 bg-black/5 px-4 py-2"></div>
        </div>
    );
};

export default Combo;
