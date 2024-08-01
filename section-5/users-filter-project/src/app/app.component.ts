import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  userList: IUser[] = [];

  constructor() {
    this.resetComponent();
    // this.loadUserList();
  }

  loadUserList() {
    this.userList = [...UsersList];
  }

  handleOnClickRowTable(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onClickCloseUserDetails() {
    this.resetComponent();
  }

  private resetComponent() {
    this.userSelected = {} as IUser;
    this.showUserDetails = false;
  }
}
