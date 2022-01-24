import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareServiceService {
data={
  name:"karima",
  prenom:" hm",
  country:" tunisia"
}

admin=true

 constructor(private http:HttpClient){}
  
  
     print(){
    console.log(this.data.name)
    console.log(this.data.prenom)
    console.log(this.data.country)
   }

   testObservable(){
return new Observable((observer)=>{

  setTimeout(()=>{
    observer.next("one")
  },2000)
  
  setTimeout(()=>{
    observer.next("two")
  },4000)
  

  
  setTimeout(()=>{
    observer.next("three")
  },6000)
  
setTimeout(()=>{
  observer.next("four")
},10000)

setTimeout(()=>{
  observer.complete()
},8000)

  })
  
}
}