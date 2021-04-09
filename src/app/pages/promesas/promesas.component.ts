import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   this.getUsuarios().then(usuarios => {
     console.log(usuarios);
   });

    //this.getUsuarios();

    // const promesa = new Promise(( resolve, reject ) => {
    //   if(false){
    //     resolve('Hola Promesa');
    //   }else{
    //     reject('Algo Salio MAL')
    //   }
    // });
    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch((error) => console.log('Error en mi promesa ', error));
    // console.log("Promesa UNO");
  }

  // getUsuarios(){

  //   fetch('https://reqres.in/api/users')
  //     .then( resp => {
  //       resp.json().then( body => console.log(body));
  //     });
  // }

  getUsuarios(){

   return new Promise( (resolve) => {
    fetch('https://reqres.in/api/users')
    .then( resp => resp.json())
    .then( body => resolve(body.data));
  });
    
  }

}
