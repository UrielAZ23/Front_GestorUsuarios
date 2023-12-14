import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { userservice } from '../../services/userservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _userservices:userservice){
    this._userservices.getUser().subscribe(response =>{
      console.log(response)
    })
  }
  ngOnInit(){
    
  }
}

