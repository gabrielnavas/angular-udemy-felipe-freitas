import { Component } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns: string[] = ['nome', 'dataCadastro', 'ativo'];
  usersList: IUser[] = [...UsersList]

  onSelectedElement(element: IUser) {
      console.log(element);
      
  }
}
