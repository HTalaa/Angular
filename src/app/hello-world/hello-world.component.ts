import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  variable="Affichage de ma donnée depuis le .ts";
  champ: string;
  color: string;
  incrementation: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  affichage():string{
    return 'Affiche-moi !!!!';
  }

  afficheDiv(div: HTMLDivElement):string {
    return div.innerHTML;
  }

  incr() {
   return  this.incrementation++;
  }

  changeValue(select: HTMLSelectElement): void {
    console.log(select.value);
  }
}
