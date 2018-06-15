import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../consts';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  checkLogin(login: string){
    console.log('NewUser', login);
    this.router.navigate([PATH_DETAIL]);
    //let allUsers: Array<User> = this.http.get('https://api.github.com/users/nartawak');
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
      })
  }

}
