import { Move as MoveModel } from '@prisma/client';
import { TbClockHour4, TbShield, TbTargetArrow } from 'react-icons/tb';

import TsTag from '@/ui/tags/tag';

interface Props {
    move: MoveModel;
}

export default function MoveInformation({ move }: Props) {
    const hitFrames = move.hitFrames[0];
    const startupFrames = move.startupFrames[0];
    const blockFrames = move.blockFrames[0];

    const showFrameInfo = hitFrames || startupFrames || blockFrames;

    return (
        <div className="flex items-center gap-4 text-zinc-50">
            {showFrameInfo && (
                <div className="flex gap-2">
                    {startupFrames && (
                        <TsTag color={'gray'}>
                            <TbClockHour4
                                size={14}
                                className="mr-1"
                            />

                            <span>i{startupFrames}</span>
                        </TsTag>
                    )}

                    {blockFrames && (
                        <TsTag color={'gray'}>
                            <TbShield
                                size={14}
                                className="mr-1"
                            />

                            <span>{blockFrames}</span>
                        </TsTag>
                    )}

                    {blockFrames && (
                        <TsTag color={'gray'}>
                            <TbTargetArrow
                                size={14}
                                className="mr-1"
                            />

                            <span>{blockFrames}</span>
                        </TsTag>
                    )}
                </div>
            )}

            <div className="flex items-center gap-2">
                {move.damage.length && (
                    <TsTag color={'red'}>
                        {move.damage.reduce((damage, n) => damage + n, 0)}{' '}
                        Damage
                    </TsTag>
                )}

                {move.hitLevels && (
                    <TsTag>
                        {move.hitLevels.length} Hit
                        {move.hitLevels.length > 1 ? 's' : ''}
                    </TsTag>
                )}
            </div>
        </div>
    );
}
