import { EventEmitter } from '@angular/core';

// | '1'
// | '2'
// | '3'
// | '4'
// | '5'
// | '6'
// | '7'
// | '8'
// | '9'
// | '0'
// | '+'
// | '-'
// | '='
// | '*'
// | '/'
// | '.'
// | '^';

export type Labels = Operators | Nums | Actions;
export type Actions = '=' | 'DEL'| 'C'|'Enter'|'Backspace';
export type Operators = '+' | '-' | '*' | '/'| '^'|'.'|'%';
export type Nums = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |'Infinity'| 'NaN';

export interface Button<T> {
  label: Labels;
  key: string;
  touch: () => void;
}
