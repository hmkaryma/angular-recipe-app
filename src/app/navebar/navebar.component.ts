import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector:'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})

export class NavebarComponent implements OnInit {

  getName=''
  getId=''


  f:any
  homes:any
  constructor(private http:HttpClient,private route: ActivatedRoute,) {
    this.route.params.subscribe(para=>{
    this.getName=para['name']
    this.getId=para['id']
    })
  
    this.onGetHome().then(d=>{
      this.homes=d
    })
  }

  ngOnInit():void {
  } 
    

  onGetHome(){
    return new Promise((resolve,reject) =>{
      this.http.get( "http://localhost:3000/home").subscribe(data=>{
       this.homes=data
      resolve(data)
    })
    
    })
  }

  
    onPostHome(f:any){
     this.http.post ("http://localhost:3000/home",{codehome:f.codehome,country:f.country,phone:f.phone,email:f.email,espace:f.espace,price:f.price,text:f.text,photo:f.photo}).subscribe(s=>{
      console.log(s)
      
    })
  
    }
  
    onDeleteHome(id:number){
      this.http.delete("http://localhost:3000/home/"+id).subscribe(s=>{ 
     console.log(s)
      })
    }
    
submit(f:NgForm){
  // letdata=f.value
  console.log (f.value) 
}

}