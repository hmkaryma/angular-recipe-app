import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, MinLengthValidator, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 
 sty="center"

  constructor (private route: Router,) {
   
   }

  
  ngOnInit(): void {
    
  }
  goTOViews(){
  
    this.route.navigate(['/views'])
    }
   
  goTONavebar(){
    
   this.route.navigate(['/navebar/karyma/123'])
  }
   goToDetails(){
  this.route.navigate(['footer/details'])
  }


   

  }
    

