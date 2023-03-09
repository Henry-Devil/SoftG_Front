import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(){}

  ngOnInit(): void {

  }
  
  addUser(){
    //Validamos que el usuario ingrese valores
    if(this.username == '' || this.password == '' || this.confirmPassword == ''){
      alert('Todos los campos son obligatorios')
    }
  }
}
