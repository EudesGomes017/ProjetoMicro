import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  public isCollapsed = true; //para começar o colaps fechado
  ngOnInit(): void {
  }

  showMenu(): boolean {
    return this.router.url !== '/user/login';
  }

}
