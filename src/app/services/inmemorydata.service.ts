import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InmemorydataService {
  
  constructor() { }
  createDb() {
    let heroes:Hero[] = [
      { 
        id:0,
        name:'Sakata Gintoki',
        series:'Gintama',
        info:"A modern day hero with the soul of samurai who struggles to get daily food with his fellow companions Kagura and Shimura Shinpachi" 
      },
      { 
        id:1,
        name:'Joseph Joestar',
        series:"JoJo's Bizarre Adventure",
        info:" I will defeat each and every one of you pillar men cause I have a battle tendency"
      },
      { 
        id:2,
        name: 'Monkey D Luffy',
        series:'One Piece',
        info:"Ore wa Monkey D luffy watashiwa Mugiwara no Captain...!" 
      },
      
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 0;
  }
}
