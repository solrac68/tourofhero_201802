import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  foods: Food[] = [
    {value: 'frijo-0', viewValue: 'Frijoles'},
    {value: 'sopa-1', viewValue: 'Sopa de Guineo'},
    {value: 'sanco-2', viewValue: 'Sancocho'}
  ];

  constructor() {}

  ngOnInit() {
  }

}

export interface Food {
  value: string;
  viewValue: string;
}