import {Component, Input, OnInit} from '@angular/core';
import {PhotoService} from '../../../Service/photo.service';

@Component({
  selector: 'app-photodetail',
  templateUrl: './photodetail.component.html',
  styleUrls: ['./photodetail.component.css'],
})

export class PhotoDetailComponent implements OnInit{
constructor(private photoService:PhotoService){}
@Input()photoModel:any[];
ngOnInit(){
  }
}
