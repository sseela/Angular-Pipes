import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Employee } from './Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 employeeList: Employee[] = [];
 dateTo: string;
 dateArray: string[] = [];

 ngOnInit() {
   this.employeeList = [{id: 111, name: 'sandeep'}, {id: 222, name: 'rupesh'}, {id: 333, name: 'bose'}];
 }

 onClick(){
   /* this.employeeList[2].name = 'sandy'; */
   //this one is value type change(pure change) for pure pipe that is uppercase

   this.employeeList = this.employeeList.concat({id: 444, name: 'sandy'});
   //remember concat method makes array immutable
 }


 createNew(){
  //this.dateTo = new Date().toString();
  this.dateArray.push(new Date().toTimeString());
  //this.dateArray = this.dateArray.concat(new Date().toTimeString());
 }
}
