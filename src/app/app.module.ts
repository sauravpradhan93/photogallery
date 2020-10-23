import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from'@angular/router';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from "@angular/material/dialog";

import{AngularFireModule} from '@angular/fire';
import{ AngularFireDatabaseModule} from '@angular/fire/database';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';;

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from '../app/photos/photo/photogallery.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PhotoDetailComponent } from './photos/photo/photodetail/photodetail.component';
import{UploadComponent} from './upload/upload.component';
import {DialogComponent} from './Dialog/dialog.component';

import { PhotoService } from './Service/photo.service';
import{AuthenticationService} from './Service/authentication.service';
import{UploadService} from './Service/upload.service';

import{appRoutes} from '../routes';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    HeaderComponent,
    LoginComponent,
    PhotoDetailComponent,
    UploadComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
AngularFireAuthModule,
AngularFireStorageModule,
MatDialogModule
  ],
  providers: [AuthenticationService,
  PhotoService,
UploadService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
