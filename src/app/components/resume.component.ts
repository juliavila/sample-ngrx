import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardModel } from '../models/dashboard.model';
import { MessageModel } from '../models/messages.model';

@Component({
  selector: 'resume-component',
  templateUrl: './resume.component.html',
})
export class ResumeComponent {

  dashboard$: Observable<DashboardModel>;
  totalMessages = 0;
  totalLikes = 0;
  totalDislikes = 0;
  
  constructor(
    private store: Store<any>,
  ) {
    this.dashboard$ = store.pipe(select('dashboard'));
    this.dashboard$.subscribe(this.updateDatas);
  }

  updateDatas = ({messages}: DashboardModel) => {
    this.totalMessages = messages.length;
    this.totalLikes = this.calcTotalLikes(messages);
    this.totalDislikes = this.calcTotalDislikes(messages);
  }

  calcTotalLikes = (messages: MessageModel[]) => 
    messages.reduce((total, curr) => total + curr.likes, 0);
  

  calcTotalDislikes = (messages: MessageModel[]) => 
    messages.reduce((total, curr) => total + curr.dislikes, 0);
  
}
