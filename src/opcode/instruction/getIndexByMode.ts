export function getIndexByMode(states: Array<string>, mode: string, index: number, distance: number, relativeBase?: number): number {
    const currentMode = mode.length >= distance ? parseInt(mode.charAt(mode.length - distance)) : 0;
    switch (currentMode) {
        case 1:
            return index + distance;
        case 2:
            return relativeBase + parseInt(states[index + distance]);
        default:
            return parseInt(states[index + distance]);
    }
}
