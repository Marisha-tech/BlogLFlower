import {Component, OnInit} from '@angular/core';
import {MENUITEM} from "../../../menu-data";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  public menu: any

  constructor() {
  }

  ngOnInit(): void {
    this.menu = MENUITEM
  }

}
