import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/messages.action';
import { ActionModel } from '../models/action.model';
import { MessageModel } from '../models/messages.model';
import { DashboardModel } from '../models/dashboard.model';

export const dashboard = new DashboardModel();

export function dashboardReducer(state = dashboard, act: Action) {
  const action = act as ActionModel;
  switch (action.type) {
    case ActionTypes.Add:
      {
        const newMessage = new MessageModel();
        newMessage.id = Math.random().toString(36).substr(2, 9);
        newMessage.text = action.payload;

        return {
          ...state, 
          messages: [
            ...state.messages, 
            newMessage
          ]
        };
      };

    case ActionTypes.Remove:
      {
        return {
          ...state,
          messages: state.messages
            .filter(m => m.id !== action.payload.id)
        };
      };

    case ActionTypes.Like:
      {
        return {
          ...state,
          messages: state.messages
            .map(m => m.id === action.payload.id 
              ? {...m, likes: m.likes + 1} : m)
        };
      }

    case ActionTypes.Dislike:
      {
        return {
          ...state,
          messages: state.messages
            .map(m => m.id === action.payload.id 
              ? {...m, dislikes: m.dislikes + 1} : m)
        };
      }

    default:
      return state;
  }
}