import { FC } from 'react';
import { Combo as ComboModel } from '@prisma/client';
import { parse } from '@tekken-tools/parser';

interface Props {
    combo?: ComboModel;
    notation: string;
}

const Combo: FC<Props> = (props) => {
    const combo = parse(props.notation);

    console.log(combo);

    return <></>;
};

export default Combo;
