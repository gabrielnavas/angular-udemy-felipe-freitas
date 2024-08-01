import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userSelected: IUser | undefined = undefined;

  handleOnClickRowTable(user: IUser) {
    this.userSelected = user;
  }

  onClickCloseUserDetails() {
    this.userSelected = undefined;
  } 
}
