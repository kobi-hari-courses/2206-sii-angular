import { getLocaleDateTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Person } from './person.vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  group = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(8), this.lowerCaseValidator]),  
    email: new FormControl('', [Validators.required, Validators.email]), 
    description: new FormControl('', [Validators.required, this.containsDots(3)])
  }, [this.emailContainsUsername]);

  control(name: string): FormControl<any> {
    const ctrl = this.group.get(name)! as FormControl<any>;
    return ctrl;
  }

  lowerCaseValidator(control: AbstractControl): null | ValidationErrors {
    if (typeof(control.value) !== 'string') return null;

    if (control.value === control.value.toLowerCase()) return null;

    return {
      'lowercase': true
    }
  }

  containsDots(count: number): (ctrl: AbstractControl) => null | ValidationErrors {
    return ctrl => {
      const val = ctrl.value;
      if (typeof(val) !== 'string') return null;

      const letters = val.split('');
      const dots = letters.filter(c => c === '.').length;
      if (dots >= count) return null;

      return {
        'dots': {
          required: count, 
          actual: dots
        }
      }
    }
  }

  emailContainsUsername(ctrl: AbstractControl) : null | ValidationErrors {
    if (!(ctrl instanceof FormGroup)) return null;

    const username = ctrl.get('username')?.value;
    const email = ctrl.get('email')?.value;

    if (typeof(username) !== 'string') return null;
    if (typeof(email) !== 'string') return null;

    if (email.toLowerCase().includes(username.toLowerCase())) return null;

    return {
      'emailContainsUsername': true
    };
  }



  constructor() {
  }

  resetForm() {
  }
}
