import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Dislike, Like, Remove } from '../actions/messages.action';
import { DashboardModel } from '../models/dashboard.model';
import { MessageModel } from '../models/messages.model';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
})
export class ListComponent {
  title = 'my-pretty-app';

  dashboard$: Observable<DashboardModel>;
  
  constructor(
    private store: Store<any>,
  ) {
    this.dashboard$ = store.pipe(select('dashboard'));
  }

  remove = (message: MessageModel) =>
    this.store.dispatch(Remove(message));

  like = (message: MessageModel) =>
    this.store.dispatch(Like(message));

  dislike = (message: MessageModel) =>
    this.store.dispatch(Dislike(message));
}
