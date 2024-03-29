import { FC } from 'react';
import { TekkenMove } from '@tekken-space/notation-parser';
import { TbChevronRight } from 'react-icons/tb';

import Instruction, {
    ControllerLayout,
} from '@/components/move-display/instruction';

interface Props {
    move: TekkenMove;
    layout?: ControllerLayout;
}

const Move: FC<Props> = (props) => {
    return (
        <div className="group mr-2 -ml-1 inline-flex gap-2">
            {props.move.instructions.map((instruction, index) => (
                <Instruction
                    key={index}
                    instruction={instruction}
                />
            ))}

            <div className="mr-2 flex items-center px-2 group-last:hidden">
                <TbChevronRight />
            </div>
        </div>
    );
};

export default Move;
