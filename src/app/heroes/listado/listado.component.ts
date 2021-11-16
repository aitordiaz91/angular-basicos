import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman','Ironman','Thor']
  HeroeBorrado: string = '';

  borrarHeroe() {
  const HeroeBorrado = this.heroes.shift() || '';
  this.HeroeBorrado = HeroeBorrado;
  }

}

