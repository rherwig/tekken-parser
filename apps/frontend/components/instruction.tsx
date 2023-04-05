import { FC } from 'react';
import type { Instruction as ParserInstruction } from '@tekken-tools/parser';
import Image from 'next/image';

interface Props {
    instruction: ParserInstruction;
}

const Instruction: FC<Props> = (props) => {
    const layout = 'controller';
    let typePath = 'default';

    switch (props.instruction.type) {
        case 'movement':
            typePath = 'movement';
            break;
        case 'action':
            typePath = layout;
            break;
        default:
            break;
    }

    const imageUrl = `/icons/${typePath}/${props.instruction.slug.toLowerCase()}.svg`;

    return (
        <div className={'flex flex-col items-center gap-2'}>
            {props.instruction.type !== 'special' ? (
                <Image
                    src={imageUrl}
                    alt={props.instruction.slug}
                    width={32}
                    height={32}
                    className={'mx-1 h-12 w-12'}
                />
            ) : (
                <div className={'flex h-12 items-center'}>
                    <div
                        className={
                            'mx-2 rounded-sm bg-black/50 px-2 py-1 text-xs font-bold uppercase'
                        }
                    >
                        {props.instruction.slug}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Instruction;
