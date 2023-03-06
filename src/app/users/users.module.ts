import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service'; 
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers:[
    UsersService 
  ]
})
export class UsersModule { }
