import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'login';
  
	test: string = 'just a test';
	constructor(private auth: AuthService) {
		//
	}
	  ngOnInit(): void {
		let sampleUser: any = {
		  name:'micle',
		  email: 'michael@realpython.com' as string,
		  password: 'michael' as string
		};
		let sampleUsers: any = {
		  //name:'micle',
		  email: 'michael@realpython.com' as string,
		  password: 'michael' as string
		};
		 this.auth.register(sampleUser)
		 .then((user) => {
		   console.log(user);
		 })
		 .catch((err) => {
		   console.log(err);
		 });
		this.auth.login(sampleUsers).then((user) => {
		  console.log(user);
		})
		.catch((err) => {
		  console.log(err);
		});
	  }
}
