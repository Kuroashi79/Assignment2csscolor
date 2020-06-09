import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  bred : number;
  bgreen : number;
  bblue : number;
  fred : number;
  fgreen : number;
  fblue : number;
  bgcol : any;
  fontcol: any;


  constructor() { }

  ngOnInit() : void {
      this.bred = 10;
      this.bblue = 10;
      this.bgreen = 10;

      this.fred = 10;
      this.fblue = 10;
      this.fgreen = 10;
    }

    changebgcolor()
    {
      this.bgcol = '#' + this.bred.toString(16) + this.bgreen.toString(16) + this.bblue.toString(16)
      //console.log ( this.bred  + this.bgreen + this.bblue);
    }

    changefontcolor ()
    {
      this.fontcol = '#' + this.fred.toString(16) + this.fgreen.toString(16) + this.fblue.toString(16)
      //console.log ( this.fred  + this.fgreen + this.fblue);
    }
}
