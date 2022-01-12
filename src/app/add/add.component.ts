import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { DbfetchService } from '../services/dbfetch.service';
import { Hero } from '../services/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  heroes: Hero[]=[];
  datasaved=false;  
  constructor(private dbfetch:DbfetchService, private location: Location, private router: Router) { }
  registerForm=new FormGroup({
    heroname:new FormControl("",[Validators.required]),
    series:new FormControl("", Validators.required),
    info:new FormControl("", Validators.maxLength(300))  
  });
  submit(){
    
    console.log(this.registerForm.value);
    this.add(this.heroname?.value, this.series?.value, this.info?.value);
    this.registerForm.reset();
  }

  
  add(name: String,
    series: string,
    info: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dbfetch.addHero({name, series, info} as Hero)
      .subscribe(hero=> {
        this.heroes.push(hero);
        this.location.back();
        console.log("Iam from register", hero);   
      });
  }

  ngOnInit(): void {
    
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

