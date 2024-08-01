import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMaterialModule,
    PipesModule,
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
    PipesModule,
  ]
})
export class ComponentsModule { }
