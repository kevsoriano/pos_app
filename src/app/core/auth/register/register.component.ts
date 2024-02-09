import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup = this.fb.group({
    'firstName': [''],
    'lastName': [''],
    'email': [''],
    'password': [''],
    'addresses': this.fb.array([
      this.fb.group({
        'city': [''],
        'country': [''],
        'street': [''],
        'postalCode': [''],
        "type": ['']
      })
    ]),
    'roles': this.fb.array([
      this.fb.group({
        'name': [''],
        'authorities': this.fb.array([
          this.fb.group({
            'name': ['']
          })
        ])
      })
    ])
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  get addresses() {
    return (this.form.get('addresses') as FormArray).controls;
  }

  get roles() {
    return (this.form.get('roles') as FormArray).controls;
  }

  getAuthorities(i: number): any {
    return (this.form.get(['roles',i,'authorities']) as FormArray).controls;
  }

  onAddAddress() {
    const group = this.fb.group({
      'city': [''],
      'country': [''],
      'street': [''],
      'postalCode': [''],
      'type': ['']
    });
    this.addresses.push(group);
  }

  onAddRole() {
    const group = this.fb.group({
      'name': [''],
      'authorities': this.fb.array([
        this.fb.group({
          'name': ''
        })
      ])
    });
    this.roles.push(group);
  }

  onAddAuthority(i: number) {
    const group = this.fb.group({
      'name': ['']
    });
    this.getAuthorities(i).push(group);
  }

  onSubmit() {
    // throw new Error('Method not implemented.');
  }
}
