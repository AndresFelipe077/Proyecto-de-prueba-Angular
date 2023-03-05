import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UserListComponent } from './components/user-list/user-list.component';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
