import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-thm-card border-t border-thm-dark py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-thm-muted text-sm font-mono">
              <span class="text-thm-green">root&#64;swatej:~$</span> echo "Thanks for visiting"
            </p>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-thm-muted hover:text-thm-cyan transition-colors">
              <span class="sr-only">GitHub</span>
              <i class="opacity-75 hover:opacity-100">GitHub</i> <!-- Replace with Icon -->
            </a>
            <a href="#" class="text-thm-muted hover:text-thm-cyan transition-colors">
              <span class="sr-only">LinkedIn</span>
              <i class="opacity-75 hover:opacity-100">LinkedIn</i> <!-- Replace with Icon -->
            </a>
          </div>
          <div class="mt-4 md:mt-0">
            <p class="text-thm-muted text-xs">
              &copy; {{ currentYear }} Swatej. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
