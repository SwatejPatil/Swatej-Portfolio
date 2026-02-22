import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 w-full bg-thm-dark/95 backdrop-blur-sm border-b border-thm-card z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="text-thm-green font-mono text-xl font-bold tracking-wider">
              <span class="text-thm-cyan">./</span>portfolio
            </a>
          </div>
          
          <div class="hidden md:flex items-center space-x-4">
            <a *ngFor="let item of navItems" 
                 [routerLink]="'/'" 
                 [fragment]="item.fragment"
                 routerLinkActive="text-thm-green bg-thm-card"
                 [routerLinkActiveOptions]="{exact: true}"
                 class="text-thm-muted hover:text-thm-green hover:bg-thm-card px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors duration-200 cursor-pointer">
                {{ item.label }}
            </a>

            <!-- Theme Toggle Button -->
            <button (click)="toggleTheme()" class="p-2 rounded-md text-thm-muted hover:text-thm-green hover:bg-thm-card transition-colors" aria-label="Toggle Dark/Light Mode">
                <!-- Sun Icon (for Dark Mode -> Switch to Light) -->
                <svg *ngIf="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <!-- Moon Icon (for Light Mode -> Switch to Dark) -->
                <svg *ngIf="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
          </div>

          <div class="md:hidden flex items-center">
             <!-- Mobile Theme Toggle -->
             <button (click)="toggleTheme()" class="p-2 mr-2 rounded-md text-thm-muted hover:text-thm-green transition-colors">
                <svg *ngIf="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg *ngIf="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
             </button>

            <!-- Mobile menu button stub -->
            <button class="text-thm-muted hover:text-thm-text">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  navItems = [
    { label: 'Home', fragment: '' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Publications', fragment: 'publications' },
    { label: 'Certifications', fragment: 'certifications' }
  ];

  isDark = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Check saved preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.setLightMode();
      } else {
        this.setDarkMode();
      }
    }
  }

  toggleTheme() {
    if (this.isDark) {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  private setLightMode() {
    this.isDark = false;
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }

  private setDarkMode() {
    this.isDark = true;
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
}
