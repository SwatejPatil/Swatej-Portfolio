import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { TerminalCardComponent } from '../../shared/components/terminal-card/terminal-card.component';
import { SkillCategory } from '../../core/models/resume.model';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, TerminalCardComponent],
    template: `
    <section class="py-12" id="skills">
      <h2 class="text-3xl font-bold text-thm-text mb-8 font-mono">
        <span class="text-thm-green">></span> ./scan_skills.sh
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <app-terminal-card 
          *ngFor="let cat of skills" 
          [title]="cat.category" 
          [command]="'ls -la ' + (cat.category | lowercase | slice:0:4)">
          
          <div class="flex flex-wrap gap-3">
            <div *ngFor="let skill of cat.items" 
                 class="group relative overflow-hidden px-4 py-2 bg-thm-dark border border-thm-green/20 rounded hover:border-thm-green transition-all duration-300 cursor-default">
              
              <!-- Progress fill animation effect (optional visual flair) -->
              <div class="absolute inset-0 bg-thm-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              
              <span class="relative z-10 text-sm font-mono text-thm-text group-hover:text-thm-green transition-colors">
                {{ skill }}
              </span>
            </div>
          </div>

        </app-terminal-card>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
    resumeService = inject(ResumeService);
    skills: SkillCategory[] = [];

    ngOnInit() {
        this.resumeService.getResume().subscribe(data => {
            this.skills = data.skills;
        });
    }
}
