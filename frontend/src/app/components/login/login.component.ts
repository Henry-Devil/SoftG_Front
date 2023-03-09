import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  login(username: string, password: string) {
    // Aquí iría la lógica de autenticación
    // Si la autenticación es exitosa, redirigimos al dashboard
    this.router.navigate(['/dashboard']);
  }

}

