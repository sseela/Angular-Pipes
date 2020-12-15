import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() dateFromParent: string;
  @Input() dateArrayFromParent: string[];
  constructor(private cdr: ChangeDetectorRef) { 
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
   
    //console.log(this.dateFromParent);
    /* if(this.dateArrayFromParent){
      this.dateArrayFromParent.forEach(s => console.log(s));
    } */
    
  }

  refresh(){
    this.cdr.detectChanges();
  }

}
