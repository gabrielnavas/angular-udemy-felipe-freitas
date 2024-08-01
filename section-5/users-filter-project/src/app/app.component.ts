import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';
import { filterUserList } from './utils/filter-user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userList: IUser[] = [];
  userListFiltered: IUser[] = [];

  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  ngOnInit(): void {
    this.initComponent();
  }

  onClickRowTable(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onClickCloseUserDetails() {
    this.initComponent();
  }

  onClickFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = filterUserList(filterOptions, this.userList);
  }

  private initComponent() {
    this.userSelected = {} as IUser;
    this.showUserDetails = false;

    setTimeout(() => {
      this.loadUserList();
      this.loadUserListFiltered();
    }, 1);
  }

  private loadUserList() {
    this.userList = [...UsersList];
  }

  private loadUserListFiltered() {
    this.userListFiltered = [...this.userList]
  }
}
