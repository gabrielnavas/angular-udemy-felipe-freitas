import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  constructor() {
    this.resetComponent();
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
