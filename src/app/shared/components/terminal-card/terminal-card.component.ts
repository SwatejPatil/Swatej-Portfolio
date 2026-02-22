import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-terminal-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-thm-card rounded-lg shadow-xl overflow-hidden border border-thm-dark mb-8 transition-transform hover:scale-[1.01] duration-300">
      <!-- Terminal Header -->
      <div class="bg-thm-dark px-4 py-2 flex items-center justify-between border-b border-thm-card">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <div class="ml-4 text-xs text-thm-muted font-mono" *ngIf="command">
            <span class="text-thm-green">➜</span> ~ {{ command }}
          </div>
        </div>
        <div class="text-xs text-thm-muted font-mono uppercase tracking-wider">
          {{ title }}
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class TerminalCardComponent {
    @Input() title: string = 'Terminal';
    @Input() command: string = '';
}
