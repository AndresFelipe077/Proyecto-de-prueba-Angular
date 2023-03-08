import { AbstractControl } from "@angular/forms";


export class MyValidators{

static isSmith(control:AbstractControl){
  const value=control.value;
  if(value != 'smith'){
    return { isSmith:true}
  }
return null;

}

}