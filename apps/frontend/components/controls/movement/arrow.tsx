import clsx from 'classnames';

import styles from './arrow.module.scss';

const ARROW_DIRECTIONS = {
    u: 'up',
    d: 'down',
    b: 'back',
    f: 'forward',
    ub: 'up-back',
    uf: 'up-forward',
    db: 'down-back',
    df: 'down-forward',
};

interface Props {
    direction: keyof typeof ARROW_DIRECTIONS;
}

export default function Arrow(props: Props) {
    const direction = ARROW_DIRECTIONS[props.direction];

    return (
        <div className={styles.arrowContainer}>
            <div className={clsx(styles.arrow, styles[direction])}></div>
        </div>
    );
}
