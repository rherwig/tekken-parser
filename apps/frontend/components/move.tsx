import { FC } from 'react';
import { Move as ParserMove } from '@tekken-tools/parser';
import Image from 'next/image';
import { ControllerLayout } from '@prisma/client';

import Instruction from '@/components/instruction';

interface Props {
    move: ParserMove;
    layout?: ControllerLayout;
}

const Move: FC<Props> = (props) => {
    return (
        <div className="group mr-2 -ml-1 inline-flex">
            {props.move.instructions.map((instruction, index) => (
                <Instruction
                    key={index}
                    instruction={instruction}
                    layout={props.layout}
                />
            ))}

            <div className="pl-3 pr-2 group-last:hidden">
                <Image
                    src="/icons/follow.svg"
                    width={32}
                    height={32}
                    className="h-10 w-auto"
                    alt="Next Move"
                />
            </div>
        </div>
    );
};

export default Move;
