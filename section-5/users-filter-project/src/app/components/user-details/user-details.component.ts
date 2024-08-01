import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Input({ required: true }) user: IUser = {} as IUser;

  @Output('onClickCloseUserDetails') onClickCloseUserDetailsEmitt = new EventEmitter<void>();

  closeUserDetails() {
    this.onClickCloseUserDetailsEmitt.emit();
  }
}
