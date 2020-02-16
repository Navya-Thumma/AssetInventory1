import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
//id:any;
public dep;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //route.params.subscribe(params => {
      //userid = params['name']
  //    this.id=params.get('id');
   // }); 
   let id=this.route.snapshot.paramMap.get('name');
   this.dep=id;
  }

}
