import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent {
  public vehicleForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    year: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$')
    ]),
    make: new FormControl('', [
      Validators.required,
      Validators.maxLength(50)
    ]),
    capacity: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ])
  });

  public submitVehicleForm(): void {
    // Lógica para enviar el formulario a través de un servicio o API
    console.log(this.vehicleForm.value);
  }
}
