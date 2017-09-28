import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';
  
  constructor( private http: HttpClient) {}
	  ngOnInit(): void {
		
		this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
				console.log(data);
		});
	  }
}
