import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    addresses: new FormArray([
      new FormGroup({
        city: new FormControl(''),
        country: new FormControl(''),
        streetName: new FormControl(''),
        postalCode: new FormControl(''),
        type: new FormControl('')
      })
    ]),
    roles: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        authorities: new FormArray([
          new FormGroup({
            name: new FormControl('')
          })
        ])
      })
    ]),
  });

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  get authorities() {
    return (this.form.get('') as FormArray).controls;
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }
}
