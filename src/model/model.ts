const LAMBDA_CHARS = '(l|λ)';
export const LAMBDA_CHARS_MATCHER = new RegExp(LAMBDA_CHARS);

export const REGEXES = {
  boundVariable: /[a-km-z]( ?)(?!.)/,
  lambda: new RegExp(LAMBDA_CHARS + '[a-km-z][.]'),
  unboundVariable: /\([a-km-z]\)/
};

const LAMBDA = 'lambda';
const BOUND_VARIABLE = 'boundVariable';

export const isLambda = (expr: IExpression) => expr.symbolType === LAMBDA;
export const isBoundVariable = (expr: IExpression) => expr.symbolType === BOUND_VARIABLE;

export class Lambda implements IExpression {
  public symbolType = LAMBDA;
  public variable: string;
  public apply: IExpression | null;
  constructor(val: string, apply: IExpression | null) {
    this.variable = val;
    this.apply = apply;
  }
}

export class BoundVariable implements IExpression {
  public symbolType = BOUND_VARIABLE;
  public variable: string;
  public apply: IExpression | null;
  constructor(val: string, apply: IExpression | null) {
    this.variable = val;
    this.apply = apply;
  }
}

export interface IExpression {
  symbolType: string;
  variable: string;
  apply: IExpression | null;
}
