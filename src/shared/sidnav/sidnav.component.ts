import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.showMenu1()
  }


  showMenu(): boolean {

    return this.router.url !== '/user/login';

  }

  showMenu1(): boolean {

    return this.router.url !== '/user/registration';

  }

}


