export interface InstructionInterface {
    increment: number;
    operation: (states:Array<string>, index:number) => Array<string>
}
