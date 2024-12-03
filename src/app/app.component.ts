import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ecommerce';

  // Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;       
  }

  // Menu Items Array
  menuItems = [
    { title: 'Fried Chicken Unlimited', category: 'Chicken', price: 49, originalPrice: 69, discount: 15, img: 'https://i.postimg.cc/LXf4Zc1P/pngwing-com-15.png' },
    { title: 'Burger King Whopper', category: 'Burger', price: 29, originalPrice: 39, discount: 10, img: 'https://i.postimg.cc/B6xzMLxK/pngwing-com-11.png' },
    { title: 'White Castle Pizzas', category: 'Pizza', price: 49, originalPrice: 69, discount: 25, img: 'https://i.postimg.cc/j2cFYp3q/pngwing-com-12.png' },
    { title: 'Bell Burrito Supreme', category: 'Burrito', price: 59, originalPrice: 69, discount: 20, img: 'https://i.postimg.cc/zv8cMzjP/pngwing-com-13.png' },
    { title: 'Kung Pao Chicken BBQ', category: 'Nuggets', price: 49, originalPrice: 69, discount: 5, img: 'https://i.postimg.cc/LXd7tBZS/pngwing-com-14.png' },
    { title: "Wendy's Chicken", category: 'Chicken', price: 49, originalPrice: 69, discount: 15, img: 'https://i.postimg.cc/3wzJN8d7/pngwing-com-16.png' },
  ];

  // Filter functionality
  selectedCategory = 'All';

  setCategory(category: string) {
    console.log('Selected Category:', category);
    this.selectedCategory = category;
  }

  get filteredMenuItems() {
    console.log('Filtering items for category:', this.selectedCategory);
    if (this.selectedCategory === 'All') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }
}
