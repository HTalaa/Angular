import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ex',
  templateUrl: './my-ex.component.html',
  styleUrls: ['./my-ex.component.css']
})
export class MyExComponent implements OnInit {
 title: string ="Ma promier application Angular";
 lastName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
