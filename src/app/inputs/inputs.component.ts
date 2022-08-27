import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  picArray:any = [];

  ngOnInit(): void {
  }

  addPic(name:HTMLInputElement,url:HTMLInputElement){
    console.log(name.value)
    console.log(url.value)
    let picName = name.value
    let picUrl = url.value
    name.value = ''
    url.value = ''
    this.picArray.push(picUrl);
    console.log(this.picArray)
  }
}
