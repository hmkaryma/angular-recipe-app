import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, MinLengthValidator, NgForm, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ShareServiceService } from '../servises/share-service.service';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit {
  myform=new FormGroup({
    firstname:new FormControl,
    lastname:new FormControl,
    country:new FormControl,
    email:new FormControl,
    phone:new FormControl,
    })

    lesUtilisateurs:any
    mform:any

    num:any
    ob:Subscription

  constructor(private http:HttpClient,private fromBuilder:FormBuilder,private share:ShareServiceService) {
    this.mform = this.fromBuilder.group({
      firstname:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',Validators.required],
      country:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      phone :['',Validators.required],
    })

    this.onGetUsers().then(d=>{
    this.lesUtilisateurs= d
  })

this.ob=this.share.testObservable().subscribe(val=>this.num.val)
   }

  ngOnInit(): void {
  }


onGetUsers(){
return new Promise((resolve,reject) =>{
  this.http.get( "http://localhost:3000/users").subscribe(data=>{
   this.lesUtilisateurs=data
  resolve(data)
})

})
}

onPostUsers(mform:any){
this.http.post ("http://localhost:3000/users",{firstname:mform.firstname,lastname:mform.lastname,country:mform.country,email:mform.email,phone:mform.phone}).subscribe(s=>{
  console.log(s)
  
})
}

onDeleteUsers(id:number){
  this.http.delete("http://localhost:3000/users/"+id).subscribe(s=>{ 
 console.log(s)
  })
}

print(){
  console.log(this.mform.value)
}

ngOnDestroy(){
  console.log("destroy")
  this.ob.unsubscribe()
}

}