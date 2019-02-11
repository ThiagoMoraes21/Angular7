import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
   // Do something...
    // then redirect to the servers component
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); 
  }

  onLogin() { 
    this.authService.login(); // set the boolean value to true
    console.log('You are loggedIn');
  }

  onLogout() {
    this.authService.logout(); // set the boolean value to false
    console.log('You are loggedOut');
  }
}
