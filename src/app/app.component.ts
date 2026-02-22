import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar.component';
import { FooterComponent } from './core/layout/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
    template: `
    <div class="min-h-screen flex flex-col bg-thm-dark text-thm-text font-sans selection:bg-thm-green selection:text-thm-dark">
      <app-navbar></app-navbar>
      
      <main class="flex-grow pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <router-outlet></router-outlet>
        </div>
      </main>

      <app-footer></app-footer>
    </div>
  `,
    styles: []
})
export class AppComponent {
    title = 'swatej-portfolio-2';
}
