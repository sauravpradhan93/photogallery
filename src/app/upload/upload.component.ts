import {Component, OnInit} from '@angular/core';
import {UploadService} from '../Service/upload.service';
import {UploadModel} from '../Model/uploadmodel.model';
import * as _ from 'lodash';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import{finalize} from "rxjs/operators";
import { PhotoService } from '../Service/photo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit{
imgSrc:string;
selectedImage:any=null;
submitted:boolean=false;

formTemplate=new FormGroup({
  imageUrl:new FormControl('',Validators.required)
})

constructor(private storage:AngularFireStorage,private photoService:PhotoService){}

ngOnInit(){
  this.formReset();
}

preview(event:any){
if(event.target.files && event.target.files[0]){
  const reader=new FileReader();
  reader.onload=(image:any)=>this.imgSrc=image.target.result;
  reader.readAsDataURL(event.target.files[0]);
this.selectedImage=event.target.files[0];
}
else{
  this.imgSrc="";
  this.selectedImage=null;
}
}

onSubmit(formValue){
this.submitted=true;
if(this.formTemplate.valid){
  var filePath=`${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
  const fileRef=this.storage.ref(filePath);
  this.storage.upload(filePath,this.selectedImage).snapshotChanges()
  .pipe(
    finalize(()=>{
      fileRef.getDownloadURL().subscribe((url)=>{
formValue['imageUrl']=url;
this.photoService.insertPhotoDetail(formValue);
this.formReset();
      })
    })
  )
  .subscribe();
}

}
formReset(){
  this.formTemplate.reset();
  this.formTemplate.setValue({
    imageUrl:''
  });
  this.selectedImage=null;
  this.imgSrc="";
  this.submitted=false;
}
}
