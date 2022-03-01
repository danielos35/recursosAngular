import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


  // Envios desde el componete Padre
  @Input() padreHijo:String = ''; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
