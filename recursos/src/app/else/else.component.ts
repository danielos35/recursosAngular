import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-else',
  templateUrl: './else.component.html',
  styleUrls: ['./else.component.css']
})
export class ElseComponent implements OnInit {
  mensaje = "este es el mensaje oculto"
  status:string = "";
  condicional:boolean = false;
  
  testear():void{
    
    if (this.status == "1234"){
      this.condicional = true;
    }else{
      this.condicional = false; 
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
