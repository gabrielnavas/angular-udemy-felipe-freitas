import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

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

    filteredList = this.filterUserListByName(filterOptions.name, userList);
    filteredList = this.filterUserListByStatus(filterOptions.status, filteredList);

    return filteredList;
  }

  private filterUserListByName(name: string | undefined, userList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) {
      return userList;
    }

    return userList.filter(user => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

  private filterUserListByStatus(status: boolean | undefined, userList: IUser[]): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) {
      return userList;
    }

    return userList.filter(user => user.ativo === status);
  }

  private resetComponent() {
    this.userSelected = {} as IUser;
    this.showUserDetails = false;
  }
}
