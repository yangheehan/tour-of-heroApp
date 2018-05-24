import { Component, OnInit, OnDestroy } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heros';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heros: Hero[];
  selectHero: Hero;

  constructor(private heroService: HeroService) {
    console.log(this.heroService);
    this.getHeroes();
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

  getHeroes(): void {
    this.heroService.getHeros().subscribe(res => this.heros = res);
  }
}
