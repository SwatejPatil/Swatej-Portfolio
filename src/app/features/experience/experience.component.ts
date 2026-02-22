import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { TerminalCardComponent } from '../../shared/components/terminal-card/terminal-card.component';
import { Experience } from '../../core/models/resume.model';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, TerminalCardComponent],
    template: `
    <section class="py-12" id="experience">
      <h2 class="text-3xl font-bold text-thm-text mb-8 font-mono">
        <span class="text-thm-green">></span> ./experience_log
      </h2>

      <div class="space-y-6">
        <app-terminal-card 
          *ngFor="let job of experience" 
          [title]="job.company" 
          [command]="'cat ' + (job.company | lowercase | slice:0:10) + '.txt'">
          
          <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-thm-cyan">{{ job.role }}</h3>
              <p class="text-thm-muted font-mono text-sm mt-1">{{ job.company }}</p>
            </div>
            <div class="mt-2 md:mt-0 text-thm-green font-mono text-sm bg-thm-dark px-3 py-1 rounded">
              {{ job.date }}
            </div>
          </div>

          <p class="text-thm-text mb-4">{{ job.description }}</p>

          <ul class="space-y-2 mb-6">
            <li *ngFor="let achievement of job.achievements" class="flex items-start">
              <span class="text-thm-green mr-2">➜</span>
              <span class="text-sm text-thm-muted">{{ achievement }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <span *ngFor="let tech of job.technologies" 
                  class="px-3 py-1 bg-thm-dark text-xs text-thm-cyan font-mono rounded border border-thm-muted/20 hover:border-thm-cyan/50 transition-colors">
              {{ tech }}
            </span>
          </div>

        </app-terminal-card>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
    resumeService = inject(ResumeService);
    experience: Experience[] = [];

    ngOnInit() {
        this.resumeService.getResume().subscribe(data => {
            this.experience = data.experience;
        });
    }
}
