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
  result = new BehaviorSubject<string>('0');

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
      .subscribe((result) => this.result.next(result));
  }

  compose(item: Labels) {
    try {
      if (item === '=') throw new Error('"=" is not yet implemented');
      this._operationState = this._sanitizeAndJoin(item);
      this.operations.next(this._formatOperation(this._operationState));
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

  private _formatOperation(operation: string): string {
    alert('to be implemented _formatOperation');
    return operation;
  }

  private calculate(operation: string): string {
    return `${evaluate(operation)}`;
  }

}


