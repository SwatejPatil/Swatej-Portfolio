import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { Resume } from '../../core/models/resume.model';
import { TerminalCardComponent } from '../../shared/components/terminal-card/terminal-card.component';

@Component({
    selector: 'app-publications',
    standalone: true,
    imports: [CommonModule, TerminalCardComponent],
    template: `
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <app-terminal-card title="Publications" command="cat publications.bib">
          <div class="space-y-8">
            <div *ngFor="let pub of publications" class="relative pl-6 border-l-2 border-thm-card hover:border-thm-cyan transition-colors duration-300">
              <!-- Timeline dot -->
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-thm-dark border-2 border-thm-cyan"></div>
              
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <h3 class="text-xl font-bold text-thm-text">{{ pub.title }}</h3>
                <span class="text-sm font-mono text-thm-green whitespace-nowrap">{{ pub.date }}</span>
              </div>
              
              <p class="text-thm-muted mb-2 italic">
                {{ pub.authors }}
              </p>
              
              <p class="text-thm-text/90 mb-3">
                {{ pub.conference }}
              </p>

              <div *ngIf="pub.link">
                 <a [href]="pub.link" target="_blank" class="inline-flex items-center text-sm font-mono text-thm-cyan hover:text-thm-green hover:underline">
                  <span>[READ PAPER]</span>
                  <svg class="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div class="mt-2" *ngIf="pub.title.includes('Submitted') || pub.title.includes('Accepted')">
                  <span class="inline-block px-2 py-1 text-xs font-bold rounded bg-thm-card text-thm-green border border-thm-green/30">
                    {{ pub.title.includes('Submitted') ? 'SUBMITTED' : 'ACCEPTED' }}
                  </span>
              </div>

            </div>
          </div>
        </app-terminal-card>
      </div>
    </section>
  `
})
export class PublicationsComponent implements OnInit {
    private resumeService = inject(ResumeService);
    publications: Resume['publications'] = [];

    ngOnInit() {
        this.resumeService.getResume().subscribe(data => {
            if (data.publications) {
                this.publications = data.publications;
            }
        });
    }
}
