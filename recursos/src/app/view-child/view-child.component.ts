import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  
  @ViewChild('nombre', { static: true })name: ElementRef;
  salida:string = ''
  print(){
   this.salida = this.name.nativeElement.value;
  }
  
  constructor() { }

  ngOnInit(): void {

  
  }

}
