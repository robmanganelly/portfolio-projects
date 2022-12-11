import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';
import { BehaviorSubject, map } from 'rxjs';
import { Labels, Nums, Operators } from '../ui/buttons/button';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  isValidKey(key: string): boolean {
    return this.allowed.includes(key as Labels);
  }
  registerKey(key: string) {
    if ([...this.nums,...this.supportedOperators].includes(key as Nums)) return this.compose(key as Labels);
    if (key === 'C') return this.clear();
    if (key === 'Enter' || key === '=' ) return this.compute();
    if (key === 'Backspace' || key === 'DEL' ) return this.deleteLast();


  }
  clear() {
    this._operationState = '';
    this.operations.next('0');
  }

  compute() {
    const last = this.result.getValue();
    this.clear();
    this.result.next(last);
  }

  deleteLast() {
    const currentOp = this.operations.getValue();
    this._operationState = currentOp.substring(0, currentOp.length-1);
    this.operations.next(this._operationState);
  }
  private _operationState = '';
  operations = new BehaviorSubject<string>(this._operationState);
  result = new BehaviorSubject<string>('');

  private allowed: Labels[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '*',
    '/',
    '=',
    '%',
    'C',
    '^',
    'NaN',
    'Infinity',
    'DEL',
    'Enter',
    'Backspace',
    '.'
  ];
  private supportedOperators: Operators[] = ['^', '+', '-', '*', '/','%','^','.'];
  private nums: Nums[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Infinity',
    'NaN',
  ];

  constructor() {
    this.operations
      .asObservable()
      .pipe(map((operation) => this.calculate(operation)))
      .subscribe((result) => {
        console.log('must emit result', result);
        this.result.next(result === 'undefined' ? ' ' : result);
      });
  }

  private compose(item: Labels) {
    try {
      this._operationState = this._sanitizeAndJoin(item);
      this.operations.next(this._operationState);
    } catch (e) {
      //debug
      console.log('catch inside compose', e);
      throw e;
    }
  }

  private _sanitizeAndJoin(item: Labels): string {
    if (this.allowed.includes(item as Labels))
      return this.supportedOperators.includes(this._operationState[this._operationState.length -1] as Operators) && this.supportedOperators.includes(item as Operators) ?
      `${this._operationState.substring(0,this._operationState.length -1)}${item}` :
      `${this._operationState}${item}`;
    return `${this._operationState}`;
  }

  formatOperations(operation: string): string {
    return operation
      .replace('+', ' + ')
      .replace('-', ' - ')
      .replace('*', ' x ')
      .replace('/', ' / ');
  }

  private calculate(operation: string): string {
    try {
      return `${evaluate(operation)}`;
    } catch (e) {
      console.log(e);
      switch (operation.charAt(operation.length - 1)) {
        case '+':
          return `${evaluate(operation + '1-1')}`;
        case '-':
          return `${evaluate(operation + '1+1')}`;
        case '*':
          return `${evaluate(operation + '1')}`;
        case '/':
          return `${evaluate(operation + '1*1')}`;
        default:
          return '';
      }
    }
  }
}
