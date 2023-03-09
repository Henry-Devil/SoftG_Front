import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})
export class DriverRegistrationComponent {
  public driverForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    first_name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    dob: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ])
  });

  public submitDriverForm(): void {
    // Lógica para enviar el formulario a través de un servicio o API
    console.log(this.driverForm.value);
  }
}
