import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

import { debounceTime } from 'rxjs'; // Cuando se inactiva al momento de escribir se envia el query, es decir lo escrito.

import { MyValidators } from '@utils/validators'; // validaciones manuales

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  emailField: FormControl;
  nameField: FormControl;
  nameField2: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.minLength(10),
      Validators.required, //campos requeridos
    ]);

    this.emailField.valueChanges
      .pipe(
        debounceTime(350),
      )
      .subscribe(value => {
        console.log(this.emailField.valid, value);
      })

    // Smith
    this.nameField = new FormControl('', [
      Validators.required,
      MyValidators.isSmith,
    ]);

    // Felipe
    this.nameField2 = new FormControl('', [
      Validators.required,
      MyValidators.isFelipe,
    ]);


  };

  ngOnInit() { }

  getValue() {
    console.log(this.nameField);
    console.log(this.nameField2);
  }


}
