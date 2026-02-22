import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../core/services/resume.service';
import { Certification, Education } from '../../core/models/resume.model';

@Component({
    selector: 'app-certifications',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-12" id="certifications">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Certifications -->
        <div>
           <h2 class="text-3xl font-bold text-thm-text mb-8 font-mono">
            <span class="text-thm-green">></span> ./list_certs.sh
          </h2>
          
          <div class="space-y-4">
            <div *ngFor="let cert of certifications" class="bg-thm-card p-4 rounded border border-thm-dark flex items-center justify-between">
              <div>
                <h4 class="font-bold text-thm-text">{{ cert.name }}</h4>
                <p class="text-sm text-thm-muted">{{ cert.issuer }}</p>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-xs text-thm-cyan font-mono mb-1">{{ cert.date }}</span>
                <span [class]="cert.status === 'Completed' ? 'text-thm-green' : 'text-yellow-500'" 
                      class="text-xs border px-2 py-0.5 rounded font-mono"
                      [style.borderColor]="cert.status === 'Completed' ? '#88cc14' : '#eab308'">
                  {{ cert.status | uppercase }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div>
           <h2 class="text-3xl font-bold text-thm-text mb-8 font-mono">
            <span class="text-thm-green">></span> cat /etc/education
          </h2>
          
          <div class="space-y-6">
            <div *ngFor="let edu of education" class="relative pl-6 border-l-2 border-thm-muted/20">
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-thm-dark border-2 border-thm-cyan"></div>
              <h4 class="font-bold text-thm-text text-lg">{{ edu.institution }}</h4>
              <p class="text-thm-cyan font-medium">{{ edu.degree }}</p>
              <p class="text-thm-muted text-sm font-mono mt-1">{{ edu.date }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class CertificationsComponent implements OnInit {
    resumeService = inject(ResumeService);
    certifications: Certification[] = [];
    education: Education[] = [];

    ngOnInit() {
        this.resumeService.getResume().subscribe(data => {
            this.certifications = data.certifications;
            this.education = data.education;
        });
    }
}
