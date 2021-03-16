import { Action } from '@ngrx/store';

export class ActionModel implements Action {
  type: string = '';
  constructor(public payload: any) { }
}

export type Actions =
  ActionModel
