import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dishes } from 'src/app/classes/dishes';
import { MatCarouselSlide,MatCarousel } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Dishes) { }

  slides = [{'image': '../../../'+this.data.dphoto},{'image': '../../../'+this.data.dphoto},{'image': '../../../'+this.data.dphoto},{'image': '../../../'+this.data.dphoto},{'image': '../../../'+this.data.dphoto}];
  
  
  ngOnInit(): void {
    console.log('../../../'+this.data.dphoto);
  }

}
