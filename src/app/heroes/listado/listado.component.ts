import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Batman'];
  heroeBorrado: string = '';

  borrarHeroe1(){
    let ind = this.heroes.indexOf('Hulk');
    this.heroes.splice(ind,1);
    console.log('borrando..');
  }

  borrarHeroe(){    
    this.heroeBorrado = this.heroes.shift() || '';    
  }
}
