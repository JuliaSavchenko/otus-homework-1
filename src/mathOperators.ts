export type ScalarOperationType = (first: number, second: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export enum MathPriorities {
  FIRST,
  SECOND,
}

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": MathPriorities.FIRST,
  "/": MathPriorities.FIRST,
  "+": MathPriorities.SECOND,
  "-": MathPriorities.SECOND,
};
