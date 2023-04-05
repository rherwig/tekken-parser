import { FC } from 'react';
import { Move as ParserMove } from '@tekken-tools/parser';

import Instruction from '@/components/instruction';

interface Props {
    move: ParserMove;
}

const Move: FC<Props> = (props) => {
    return (
        <div className="group mr-2 -ml-1 inline-flex">
            {props.move.instructions.map((instruction, index) => (
                <Instruction
                    key={index}
                    instruction={instruction}
                />
            ))}

            <div className="pl-3 pr-2 group-last:hidden">
                <img
                    src="/icons/follow.svg"
                    className="h-10"
                    alt="Next Move"
                />
            </div>
        </div>
    );
};

export default Move;
