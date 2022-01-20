import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { DbfetchService } from '../services/dbfetch.service';
import { Hero } from '../services/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  heroes:Hero[]=[];

  constructor( private series:DbfetchService, private dialog:MatDialog , private router:Router) { }

  ngOnInit(): void {
    this.getHero();
  }




  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getHero(): void {
    this.series.getHeroes()
    .subscribe(hero => this.heroes = hero);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.series.deleteHero(hero.id).subscribe();
  }  
}


