export function isOperator(operator: string): boolean {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

export function isNumber(str: string): boolean {
  const investigatedValue = parseInt(str);
  const isNum = !isNaN(investigatedValue);
  return isNum;
}
