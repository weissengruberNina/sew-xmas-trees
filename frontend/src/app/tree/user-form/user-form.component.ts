import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent{
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    zipCode: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required]
  });
  hasUnitNumber = false;

  states = [
    {name: 'Burgenland', abbreviation: 'BL'},
    {name: 'Carinthia', abbreviation: 'CA'},
    {name: 'Lower Austria', abbreviation: 'LA'},
    {name: 'Upper Austria', abbreviation: 'UA'},
    {name: 'Salzburg', abbreviation: 'SA'},
    {name: 'Styria', abbreviation: 'ST'},
    {name: 'Tyrol', abbreviation: 'TY'},
    {name: 'Vorarlberg', abbreviation: 'VB'},
    {name: 'Vienna', abbreviation: 'VI'}
  ];

  constructor(private fb: FormBuilder, private router: Router) {}
}
