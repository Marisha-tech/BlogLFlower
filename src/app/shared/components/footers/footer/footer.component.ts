import { Component, OnInit } from '@angular/core';
import {MENUITEM} from "../../../menu-data";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public menu: any

  constructor() { }

  ngOnInit(): void {
    this.menu = MENUITEM
  }

}
