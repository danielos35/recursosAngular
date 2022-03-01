import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Con @input esta clase estara preparada pare recibir datos desde el padre
  @Input()mensaje:string;

}
