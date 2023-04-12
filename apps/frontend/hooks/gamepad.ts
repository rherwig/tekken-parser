import { useEffect, useState } from 'react';

export interface UseGamepadResult {
    gamepads: Gamepad[];
}

function onButtonPressed() {
    console.log('Button pressed');
}

export function useGamepad(): UseGamepadResult {
    const [gamepad, setGamepad] = useState<Gamepad | null>(null);

    // useEffect(() => {
    //     const onGamepadConnected = (event: GamepadEvent) => {
    //         setGamepad(event.gamepad);
    //     };
    //
    //     const onGamepadDisconnected = () => {
    //         setGamepad(null);
    //     };
    //
    //     window.addEventListener('gamepadconnected', onGamepadConnected);
    //     window.addEventListener('gamepaddisconnected', onGamepadDisconnected);
    //
    //     return () => {
    //         window.removeEventListener('gamepadconnected', onGamepadConnected);
    //         window.removeEventListener(
    //             'gamepaddisconnected',
    //             onGamepadDisconnected,
    //         );
    //     };
    // }, []);

    const result: UseGamepadResult = {
        gamepads: [],
    };

    useEffect(() => {
        if (!('getGamepads' in navigator)) {
            console.warn(`[useGamepad] Gamepad API not supported.`);
            return;
        }

        window.addEventListener('gamepadconnected', console.log.bind(console));
        window.addEventListener(
            'gamepaddisconnected',
            console.log.bind(console),
        );

        const gamepads = navigator
            .getGamepads()
            .filter((gamepad) => gamepad !== null);

        if (!gamepads.length) {
            console.warn(`[useGamepad] No gamepads found.`);
        }
    }, []);

    return result;
}
