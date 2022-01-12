import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbfetchService } from '../services/dbfetch.service';
import { Hero } from '../services/hero';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor
  ( private dbfetch: DbfetchService, 
    private location:Location, 
    private route: ActivatedRoute,) {


     }

  hero:Hero|undefined;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.dbfetch.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }


  save(): void {
    if (this.hero) {
      this.dbfetch.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}

