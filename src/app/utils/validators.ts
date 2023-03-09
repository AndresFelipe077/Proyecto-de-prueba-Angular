import { AbstractControl } from "@angular/forms"; // controlador

export class MyValidators {

  static isSmith(control: AbstractControl) {
    const value = control.value;
    if (value != 'smith') {
      return { isSmith: true }
    }
    return null;

  }

  static isFelipe(control: AbstractControl) {
    const value = control.value;
    if (value != 'Felipe') {
      return { isFelipe: true }
    }
    return null;
  }

}