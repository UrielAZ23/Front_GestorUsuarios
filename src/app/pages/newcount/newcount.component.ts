import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-newcount',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './newcount.component.html',
  styleUrl: './newcount.component.css'
})
export class NewcountComponent {

}
