import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public selectedEmployees: any = [];
  public employees: any = [];
  public isSearchOn: any = false;
  public myInput:any = "";
  constructor(public navCtrl: NavController) {
      this.selectedEmployees = [];
      this.employees = ["dummy","care","me","try","we"];
  }
  search(event) {
    let q = this.myInput;
    if (q.trim() == '') {
      this.isSearchOn = false;
      return;
    }
    this.isSearchOn = true;
  }
  onCancel(event) {
    this.isSearchOn = false;
  }
  onBlur(event) {
    this.myInput = "";
    this.isSearchOn = false;
  }
  itemTapped(event, employee) {
    debugger
    this.selectedEmployees.push(employee);
    this.isSearchOn = false;
    console.log(employee);
  }

}
