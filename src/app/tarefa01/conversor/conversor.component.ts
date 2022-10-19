import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  _arabic: number = 0;
  _roman: string = '';
  converter = require("tc-roman-number")

  constructor() { }

  ngOnInit(): void { }

  set numberInt(value: number) {
    this._arabic = value;
    if (value > 0)
      this._roman = this.converter.intToRoman(parseInt(value.toString()));
    else
      this._roman = "";
  }

  get numberInt(): number {
    return this._arabic;
  }

  set numberRoman(value: string) {
    this._roman = value;
    if (value.length > 0)
      this._arabic = this.converter.romanToInt(value);
    else
      this._arabic = 0;
  }

  get numberRoman(): string {
    return this._roman;
  }

}
