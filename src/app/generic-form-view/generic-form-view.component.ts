import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-form-view',
  templateUrl: './generic-form-view.component.html',
  styleUrls: ['./generic-form-view.component.css']
})
export class GenericFormViewComponent {
  testString:string = "";
  constructor() {
    this.testString = "";
  }

  ngOnInit() {
    this.testString = "HEY YOU GUYS";
  }
}
