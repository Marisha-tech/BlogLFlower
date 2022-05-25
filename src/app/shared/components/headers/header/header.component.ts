import { Component, OnInit } from '@angular/core';
import {MENUITEM} from "../../../menu-data";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu: any

  constructor() { }

  ngOnInit(): void {
    this.menu = MENUITEM
  }

}
