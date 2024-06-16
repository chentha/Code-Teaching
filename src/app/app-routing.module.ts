import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'sing-up', component: SignUpComponent },
  { path: 'comments', component: CommentComponent },
  { path: 'video-page', component: VideoPageComponent },
  { path: 'detail-video', component: DetailVideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
