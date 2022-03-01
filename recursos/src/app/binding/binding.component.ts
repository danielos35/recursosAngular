import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  habilitarInputPropiety: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  habDes() {
    if (this.habilitarInputPropiety) {
      this.habilitarInputPropiety = false;
    } else {
      this.habilitarInputPropiety = true;
    }
  }
}
