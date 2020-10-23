import{PhotoGalleryComponent} from "../src/app/photos/photo/photogallery.component";
import{LoginComponent} from "../src/app/login/login.component";
import {UploadComponent} from "../src/app/upload/upload.component";
import {PhotoDetailComponent} from "../src/app/photos/photo/photodetail/photodetail.component";
import{Routes} from '@angular/router';

export const appRoutes:Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
{path:'photogallery', component:PhotoGalleryComponent},
{path:'login', component:LoginComponent},
{path:'upload', component:UploadComponent},
{path:'photodetail/:id', component:PhotoDetailComponent}
];
