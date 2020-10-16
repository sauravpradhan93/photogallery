import { Component, OnInit, OnChanges } from '@angular/core';
import {PhotoService} from '../Service/photo.service';
import {PhotoModel} from '../Model/photomodel.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css'],

})
export class PhotoGalleryComponent implements OnInit {
photos:Observable<PhotoModel[]>
  constructor(private photoService:PhotoService) { }

  ngOnInit(){

  }
ngOnChanges(){
}
}
