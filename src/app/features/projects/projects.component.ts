import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { Project } from '../../core/models/resume.model';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-12" id="projects">
      <h2 class="text-3xl font-bold text-thm-text mb-8 font-mono">
        <span class="text-thm-green">></span> ./deploy_projects.py
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let project of projects" 
             class="bg-thm-card rounded-lg overflow-hidden border border-thm-dark hover:border-thm-green transition-all duration-300 transform hover:-translate-y-1 group">
          
          <!-- Image Placeholder / Header -->
          <div class="h-32 bg-thm-dark relative flex items-center justify-center overflow-hidden">
             <!-- If image exists, we would show it here. For now, a pattern or icon -->
             <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-thm-green to-transparent"></div>
             <div class="text-4xl text-thm-muted group-hover:text-thm-green transition-colors font-mono">
               {{ '{ }' }}
             </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold text-thm-text group-hover:text-thm-green transition-colors mb-2">
              {{ project.title }}
            </h3>
            
            <p class="text-thm-muted text-sm mb-4 min-h-[3rem]">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
               <span *ngFor="let tech of project.technologies | slice:0:3" 
                     class="text-xs px-2 py-1 bg-thm-dark rounded text-thm-cyan font-mono">
                 {{ tech }}
               </span>
            </div>

            <a [href]="project.link" class="block w-full text-center py-2 bg-thm-green text-thm-dark font-bold rounded hover:bg-opacity-90 transition-opacity">
              DEPLOY MACHINE
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
    resumeService = inject(ResumeService);
    projects: Project[] = [];

    ngOnInit() {
        this.resumeService.getResume().subscribe(data => {
            this.projects = data.projects;
        });
    }
}
