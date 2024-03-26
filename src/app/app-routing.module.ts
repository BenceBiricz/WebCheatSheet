import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HtmlPageComponent } from './pages/html-page/html-page.component';
import { CssPageComponent } from './pages/css-page/css-page.component';
import { TypescriptPageComponent } from './pages/typescript-page/typescript-page.component';
import { CSharpPageComponent } from './pages/c-sharp-page/c-sharp-page.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  {
    path: 'html',
    component: HtmlPageComponent,
  },
  {
    path: 'css',
    component: CssPageComponent,
  },
  {
    path: 'typescript',
    component: TypescriptPageComponent,
  },
  {
    path: 'csharp',
    component: CSharpPageComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: '**',
    redirectTo: 'html',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
