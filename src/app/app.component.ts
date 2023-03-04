import { Component } from '@angular/core';
import { Product } from './product/models/product.model';
interface user{
  name:string;
  age:number;
  isSingle: boolean;
  avatar:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'holanuevo';
  name ='nicolas';

  rockbans: string[] =['nirvana','los cabesones'];

  users: user[]=[
{
    name:'nicolas',
    age:26,
    isSingle:false,
    avatar:'assets/images/5456.jpg',
},

{
name:'julian',
age:59,
isSingle:true,
avatar:'assets/images/5456.jpg',

}

];
  rockbanName='';

changeTitle(){
 this.title = 'hola a esta primera clase';
}
addRockBand(){


  this.rockbans.push(this.rockbanName);
  this.rockbanName ='';
}



empty(){
  this.rockbans=[];
}
deleteItem(index:number){
  this.rockbans.splice(index,1);
}

updateItem(index:number){
  this.rockbans[index]='se cambio';
}


}
