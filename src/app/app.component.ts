import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { favoriteNumber, loadUsers, loadUsersSuccess, selectUser } from './store/actions/user/user.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-first';
  constructor(
    private store: Store
  ){
    this.store.dispatch(loadUsersSuccess({data: [{id: 9, name: 'joe'}]}));
    this.store.dispatch(selectUser({data: {id: 9, name: 'mark'}}));
    this.store.dispatch(favoriteNumber({data: 1}))
  }
}
