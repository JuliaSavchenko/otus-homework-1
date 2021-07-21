import { ParsedLineType } from "./parser";
import { isNumber } from "./parserUtils";
import {
  mathOperators,
  MathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === MathPriorities.FIRST
    ) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === MathPriorities.FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === MathPriorities.SECOND
    ) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
