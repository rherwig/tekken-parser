import Arrow from '@/components/controls/movement/arrow';
import Neutral from '@/components/controls/movement/neutral';

interface Props {
    slug: string;
}

export default function MovementControls(props: Props) {
    const isNeutral = props.slug === 'N' || props.slug === 'n';
    const isHoldInput = props.slug.toLowerCase() !== props.slug;

    return (
        <div className="relative flex h-full items-center justify-center">
            {isNeutral && <Neutral />}

            {!isNeutral && (
                <Arrow
                    direction={props.slug.toLowerCase() as any}
                    hold={isHoldInput}
                />
            )}
        </div>
    );
}
