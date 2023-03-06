import { Component,OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  emailField:FormControl;


  constructor(){
    const validations =[Validators.minLength(10),Validators.required]
    this.emailField=new FormControl('',validations);
    this.emailField.valueChanges
    .subscribe(value=>{
      console.log(this.emailField.valid,value);
    });
  }

  ngOnInit(){}
}
