import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './Employee.model';

@Pipe({
    name: "employeeFilter",
    pure: true
})
export class EmployeeFilter implements PipeTransform{
    transform(list: Employee[], searchString: string): Employee[]{
        if(!searchString){
            return list;
        } else {
            return list.filter(emp => emp.name.toLowerCase().indexOf(searchString) !== -1);
        }
    }
}