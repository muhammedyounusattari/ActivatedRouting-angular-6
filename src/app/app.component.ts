import { Component } from '@angular/core';

@Component({
  selector: '[app-main]',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  // public username:string ="admin";
  // public password:string ="admin";

  // public email:string = 'abc@gmail.com';

  // public  buttonClicked(uname, password){
  //   alert('buttonClicked....'+uname+'......'+password);
  // }

  public dataSubmitted(event,user){
    event.preventDefault();
    console.log(user);
    alert(user);
    // var email:string = user.email;
    // var password:string = user.password;
    // alert(email);
    // alert(password);

  }
}
