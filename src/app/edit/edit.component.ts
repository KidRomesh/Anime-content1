import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbfetchService } from '../services/dbfetch.service';
import { Hero } from '../services/hero';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
//   hero: Hero | undefined;

//   constructor(
//     private route: ActivatedRoute,
//     private heroService: DbfetchService,
//     private location: Location
//   ) {}

//   ngOnInit(): void {
//     this.getHero();
//   }

//   getHero(): void {
//     const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
//     this.heroService.getHero(id)
//       .subscribe(hero => this.hero = hero);
//   }

//   goBack(): void {
//     this.location.back();
//   }

//   save(): void {
//     if (this.hero) {
//       this.heroService.updateHero(this.hero)
//         .subscribe(() => this.goBack());
//     }
//   }
// }

  

  constructor( private dbfetch: DbfetchService, private location:Location, private route: ActivatedRoute,) { }
  registerForm=new FormGroup({
    heroname:new FormControl("",[Validators.required]),
    series:new FormControl("", Validators.required),
    info:new FormControl("", Validators.maxLength(300))  
  });
  hero:Hero[]=[];

  ngOnInit(): void {
  }
    getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.dbfetch.getHero(id)
      .subscribe(hero =>hero = hero);
    }

  goBack(): void {
    this.location.back();
  }

  save(name: String,
    series: string,
    info: string): void{
      this.dbfetch.updateHero({name, series, info}as Hero)
        .subscribe(() => this.location.back());
    }
    submit(){
    
      console.log(this.registerForm.value);
      this.save(this.heroname?.value, this.series?.value, this.info?.value);
      this.location.back()
      this.registerForm.reset()
    }

    get heroname(){
      return this.registerForm.get('heroname')
    }
    get series(){
      return this.registerForm.get('series')
    }
    get info(){
      return  this.registerForm.get('info')
    }
  }

