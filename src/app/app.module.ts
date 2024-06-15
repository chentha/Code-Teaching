// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    VideoPageComponent,
    DetailVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

