import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/UI/layout/layout.component';
import { PostsComponent } from './features/posts/pages/posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children: [
      { path: '', component: PostsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
