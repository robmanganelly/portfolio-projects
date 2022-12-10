import { EventEmitter } from '@angular/core';

export type Labels =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 0
  | '+'
  | '-'
  | '='
  | '*'
  | '/'
  | '.'
  | '**';

export interface Button<T> {
  label: Labels;
  key: string;
  emit: EventEmitter<Labels>
  press: (event: any) => void;
  touch: () => void;
}
