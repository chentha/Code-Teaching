import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { VideoPageComponent } from './video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    DetailVideoComponent,
    VideoPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
