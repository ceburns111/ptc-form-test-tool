import { Component, OnInit } from '@angular/core';
import { GenericForm  } from '../core/models/generic-form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  private _genericForms: GenericForm[] = [];
  public get genericForms(): GenericForm[] {
    return this._genericForms;
  }
  public set genericForms(value: GenericForm[]) {
    this._genericForms = value;
  }
  selectedForm: string = "";
  
  constructor() {
  }

  ngOnInit() {
    let formA = new GenericForm("form_a", ["Field A Name"]);
    let formB = new GenericForm("form_b", ["Field B Name"]);

    this.genericForms.push(formA);
    this.genericForms.push(formB);  
  }
}
