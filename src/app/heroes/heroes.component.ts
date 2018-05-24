import { Component, OnInit, OnDestroy } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero: Hero = {id: 1, name: 'Winstorm'};
  heros: Hero[] = HEROES;
  selectHero: Hero;

  constructor() {
    console.log('constructor 메소드 호출');
  }


  ngOnInit() {
    console.log('ngOnInit() 메소드 호출');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() 메소드 호출');
  }

  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }
}
