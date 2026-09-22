import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home | Angular Routing Demo' },
  { path: 'about', component: AboutComponent, title: 'About | Angular Routing Demo' },
  { path: 'products', component: ProductsComponent, title: 'Products | Angular Routing Demo' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Angular Routing Demo' },
  { path: '**', redirectTo: 'home' }
];
