import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constant = Constants;
  constructor() { }

  ngOnInit(): void {
  }

}
