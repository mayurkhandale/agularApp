import { Component,NgModule,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})

export class HomeComponent {
data:any[]=[];
loader:any=false;
error:any=null;
constructor(private dataService:DataService){

}
ngOnInit(){
  this.loader=true
  setTimeout(()=>{
    this.dataService.getData().subscribe(data=>{
      this.data=data
      this.loader=false;
      this.error=false;
    })
  },3000);
 
  //console.log(this.dataService.getData(), '23:::')
}
deleteRow(item:any){
  console.log('triggerr',item)
  this.data=this.data.filter(items=>items.id!==item.id)
  if(this.data.length<=0){
    this.error="Data Not Found"
  }
}
}
