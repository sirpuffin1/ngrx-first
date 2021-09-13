import { state } from '@angular/animations';
import { Action, createReducer, on, select } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { favoriteNumber, loadUsers, loadUsersSuccess, selectUser } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: User[]
  selectedUser: null | User
  favoriteNumber: number| null
}

export const initialState: State = {
  users: [],
  selectedUser: null,
  favoriteNumber: null
};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return {...state, users: action.data}
  } ),
  on(selectUser, (state, action) => {
    return {...state, selectedUser: action.data}
  }),
  on(favoriteNumber, (state,action) => {
    return {...state, favoriteNumber: action.data}
  })


);

//create actions, reducer update interface , component
