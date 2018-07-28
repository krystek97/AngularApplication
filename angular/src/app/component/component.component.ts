import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sky-component',
  template : 
  `<p>
   component works inline!
  </p>` ,
  styles: [`p{color: red}`]
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
