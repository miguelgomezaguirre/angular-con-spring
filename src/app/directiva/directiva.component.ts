import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  lenguajes: string[] = ['Java', 'C#', 'PHP', 'Python'];
  habilitar = true;

  setHabilitar() {
    this.habilitar = (this.habilitar) ? false : true;
  }

  constructor() { }

  ngOnInit() {
  }

}
