import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { isWithinInterval } from 'date-fns';
import { filterUserListByDate, filterUserListByName, filterUserListByStatus } from './utils/filter-user-list';

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
    this.resetComponent();
    setTimeout(() => {
      this.loadUserList();
      this.loadUserListFiltered();
    }, 1);
  }

  loadUserList() {
    this.userList = [...UsersList];
  }

  loadUserListFiltered() {
    this.userListFiltered = [...this.userList]
  }

  onClickRowTable(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onClickCloseUserDetails() {
    this.resetComponent();
  }

  onClickFilter(filterOptions: IFilterOptions) {
    this.userListFiltered = this.filterUserList(filterOptions, this.userList);
  }

  private filterUserList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = filterUserListByName(filterOptions.name, userList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }
  private resetComponent() {
    this.userSelected = {} as IUser;
    this.showUserDetails = false;
  }
}
