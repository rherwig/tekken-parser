import Arrow from '@/components/controls/movement/arrow';
import Neutral from '@/components/controls/movement/neutral';

interface Props {
    slug: string;
}

export default function MovementControls(props: Props) {
    const isNeutral = props.slug === 'N' || props.slug === 'n';

    return (
        <div className="relative flex h-full items-center justify-center">
            {isNeutral && <Neutral />}

            {!isNeutral && <Arrow direction={props.slug as any} />}
        </div>
    );
}
