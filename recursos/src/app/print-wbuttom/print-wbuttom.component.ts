import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-wbuttom',
  templateUrl: './print-wbuttom.component.html',
  styleUrls: ['./print-wbuttom.component.css']
})
export class PrintWButtomComponent implements OnInit {
  title:string ="titulo";
  changeTitle(){
    this.title = "Titulo con cambio"
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
