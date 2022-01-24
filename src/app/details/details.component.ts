import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../servises/share-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{
 
 linkImage="https://s.abcnews.com/images/Business/ht_real_estate_tips_js_150206_16x9_992.jpg"
  link="https://bkassocies.tn/wp-content/uploads/2019/08/achat-et-la-vente-des-biens-immobiliers-par-les-etrangers-en-Tunisie-1.pdf "


 constructor(private route:Router,private share:ShareServiceService ) { 
  console.log (this.share.data)

  }


  ngOnInit(): void {
  }


 
}

export class monApplicationComponent{
}
