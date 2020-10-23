import { Component, OnInit, OnChanges } from '@angular/core';
import {PhotoService} from '../../Service/photo.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {DialogComponent} from '../../Dialog/dialog.component';


@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css'],

})
export class PhotoGalleryComponent implements OnInit {
photos:any[];
array:any[];
  constructor(private photoService:PhotoService,public dialog:MatDialog) { }

  ngOnInit(){
   this.photoService.getPhotoDetailList().snapshotChanges().subscribe(
     imageList=>{
       this.photos=imageList.map(item=>{return item.payload.val(); });
this.array=Array.from(Array(Math.ceil(this.photos.length)).keys());
     }
   )
    }
onSubmit(){

const dialogRef=this.dialog.open(DialogComponent);
dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
});
}
}

