import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';
import { BehaviorSubject, map } from 'rxjs';
import { Labels, Nums, Operators } from '../ui/buttons/button';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
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
  ];
  private supportedOperators: Operators[] = ['^', '+', '-', '*', '/'];
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
        this.result.next(result === 'undefined' ? ' ' : result)
      });
  }

  compose(item: Labels) {
    try {
      if (item === '=') throw new Error('"=" is not yet implemented');
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
      return `${this._operationState}${item}`;
    return `${this._operationState}`;
  }

  formatOperations(operation: string): string {
    return operation
    .replace('+',' + ')
    .replace('-',' - ')
    .replace('*',' x ')
    .replace('/', ' / ')
    ;
  }

  private calculate(operation: string): string {
    try{
      return `${evaluate(operation)}`;
    }catch(e){
      console.log(e);
      switch(operation.charAt(operation.length-1)){
        case '+':
          return `${evaluate(operation +'1-1')}`;
        case '-':
            return `${evaluate(operation +'1+1')}`;
        case '*':
            return `${evaluate(operation +'1')}`;
        case '/':
            return `${evaluate(operation +'1*1')}`;
        default:
          return '';
      }
    }
  }

}


