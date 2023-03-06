import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/users/models/user.model';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
users: User[]=[];
limit!:number;
  constructor(

    private userService:UsersService
  ){}

  ngOnInit(){
    
  }
  fethcUsers(){
    console.log(this.limit);
    this.userService.getAllUsers(this.limit)
    .subscribe(users=>
      {
      this.users= users;
      });

  }
  
}
