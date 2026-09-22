import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  readonly products: Product[] = [
    {
      id: 1,
      name: 'Angular Starter Kit',
      description: 'Pre-configured CLI project with routing and deployment scripts.',
      price: 'Free'
    },
    {
      id: 2,
      name: 'Route Guard Pack',
      description: 'Sample guards for auth and role-based navigation.',
      price: '$19'
    },
    {
      id: 3,
      name: 'Deploy Toolkit',
      description: 'GitHub Pages workflow and production build configuration.',
      price: '$29'
    }
  ];
}
