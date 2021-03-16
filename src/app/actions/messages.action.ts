import { Action } from '@ngrx/store';
import { MessageModel } from '../models/messages.model';

export enum ActionTypes {
  Add = 'ADD',
  Remove = 'REMOVE',
  Like = 'LIKE',
  Dislike = 'DISLIKE'
}

export const Add = (text: string) => 
  <Action>{ type: ActionTypes.Add, payload: text };

export const Remove = (message: MessageModel) => 
  <Action>{ type: ActionTypes.Remove, payload: message };

export const Like = (message: MessageModel) => 
   <Action>{ type: ActionTypes.Like, payload: message };

export const Dislike = (message: MessageModel) => 
   <Action>{ type: ActionTypes.Dislike, payload: message };
