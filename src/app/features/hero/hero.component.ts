import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { Subscription } from 'rxjs';
import { Resume } from '../../core/models/resume.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-[60vh] flex items-center justify-center py-12">
      <div class="max-w-4xl w-full">
        <!-- Terminal Window Frame -->
        <div class="bg-thm-card rounded-lg shadow-2xl overflow-hidden border border-thm-dark">
          <div class="bg-thm-dark px-4 py-2 flex items-center gap-2 border-b border-thm-card">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <div class="ml-4 text-xs text-thm-muted font-mono">user&#64;portfolio:~</div>
          </div>
          
          <div class="p-6 sm:p-10 font-mono">
            <div class="mb-6">
              <span class="text-thm-green">➜</span> 
              <span class="text-thm-cyan ml-2">~</span> 
              <span class="text-thm-text ml-2">./introduce_self.sh</span>
            </div>

            <div class="space-y-4">
              <h1 class="text-4xl sm:text-6xl font-bold text-thm-text mb-4">
                {{ displayedName }}<span class="terminal-cursor"></span>
              </h1>
              
              <div class="text-xl sm:text-2xl text-thm-muted animate-fade-in-up" *ngIf="showRole">
                {{ profile?.role }}
              </div>

              <p class="text-thm-muted mt-6 max-w-2xl leading-relaxed animate-fade-in-up delay-200" *ngIf="showSummary">
                {{ profile?.tagline }}
              </p>

              <div class="mt-8 flex gap-4 animate-fade-in-up delay-300" *ngIf="showSummary">
                 <a [href]="profile?.links?.github" target="_blank" class="px-4 py-2 border border-thm-green text-thm-green hover:bg-thm-green hover:text-thm-dark transition-colors rounded text-sm font-bold">
                  GITHUB
                </a>
                <a [href]="profile?.links?.linkedin" target="_blank" class="px-4 py-2 border border-thm-cyan text-thm-cyan hover:bg-thm-cyan hover:text-thm-dark transition-colors rounded text-sm font-bold">
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
      transform: translateY(10px);
    }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  resumeService = inject(ResumeService);
  profile: Resume['profile'] | undefined;
  subscription = new Subscription();

  displayedName = '';
  fullText = 'Hello, I\'m Swatej';
  showRole = false;
  showSummary = false;

  private typingSpeed = 100;

  ngOnInit() {
    this.subscription.add(
      this.resumeService.getResume().subscribe(data => {
        this.profile = data.profile;
        this.startTyping();
      })
    );
  }

  startTyping() {
    let index = 0;
    const interval = setInterval(() => {
      this.displayedName += this.fullText[index];
      index++;
      if (index >= this.fullText.length) {
        clearInterval(interval);
        setTimeout(() => { this.showRole = true; }, 500);
        setTimeout(() => { this.showSummary = true; }, 1000);
      }
    }, this.typingSpeed);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
