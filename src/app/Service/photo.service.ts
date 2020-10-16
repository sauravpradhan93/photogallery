
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn:'root'
})
export class PhotoService{
 photoDetailList:AngularFireList<any>;

constructor(private angDB:AngularFireDatabase){}

getPhotoDetailList(){
  this.photoDetailList=this.angDB.list('photoDetails');
}

 insertPhotoDetail(photoDetails){
   this.photoDetailList.push(photoDetails);
 }



}
