export interface InstructionInterface {
    increment: number;
    operation: (states:Array<number>, index:number) => Array<number>
}
