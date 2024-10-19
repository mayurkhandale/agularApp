import { Component,OnInit } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,AboutComponent, FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(){
  console.log('constructor trigger')
}
  title = 'app';
  name='';
  flag=false;
  technology='';
 ngOnInit(){
  this.name="shivaaa"
 }
  handleClick(){
   this.name="Mayur MR"
  }
  clearName(){
    this.name=""
  }
  alterNativeContent(){
    this.flag= !this.flag
    this.technology=this.flag ?"Angular":"React JS";
   
  }
}
