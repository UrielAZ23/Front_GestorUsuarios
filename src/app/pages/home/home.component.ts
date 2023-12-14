import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { userservice } from '../../services/userservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private _userservices:userservice){

  }
  ngOnInit(){
    this._userservices.getUser().subscribe(response =>{
      console.log(response)
    })
  }
}

