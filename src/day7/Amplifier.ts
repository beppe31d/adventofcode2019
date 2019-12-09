import {OpCode} from "../opcode/OpCode";

interface AmplifierOutput {
    signal: number,
    phases: Array<number>
}

export class Amplifier {
    start = (states: Array<string>, amplifiers: number): AmplifierOutput => {
        return this.amplify(states, [], 0, amplifiers);
    }

    private amplify = (states: Array<string>, phases: Array<number>, inputSignal: number, amplifiers: number): AmplifierOutput => {
        let output = {signal: 0, phases: [] };
        for (let phase = 0; phase < amplifiers; phase++) {
            if (phases.includes(phase)) {
                continue;
            }

            let newOutput = this.amplifyPhase(phases, phase, states, inputSignal, amplifiers);
            if (newOutput.signal > output.signal) {
                output = newOutput
            }
        }

        return output
    }

    private amplifyPhase(phases: Array<number>, phase: number, states: Array<string>, inputSignal: number, amplifiers: number): AmplifierOutput {
        const opCode = new OpCode();
        const newPhases = phases.map((item) => item);
        newPhases.push(phase);
        const newSignal = opCode.calculate(states.map((item) => item), [phase, inputSignal]).output.shift()

        return newPhases.length === amplifiers ? {signal: newSignal, phases: newPhases} :
            this.amplify(states.map((item) => item), newPhases, newSignal, amplifiers);
    }
}
