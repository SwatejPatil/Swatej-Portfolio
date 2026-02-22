import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { PublicationsComponent } from '../publications/publications.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, CertificationsComponent, PublicationsComponent],
  template: `
    <div id="home">
      <app-hero></app-hero>
    </div>
    <div id="experience" class="scroll-mt-20">
      <app-experience></app-experience>
    </div>
    <div id="skills" class="scroll-mt-20">
      <app-skills></app-skills>
    </div>
    <div id="projects" class="scroll-mt-20">
      <app-projects></app-projects>
    </div>
    <div id="publications" class="scroll-mt-20">
      <app-publications></app-publications>
    </div>
    <div id="certifications" class="scroll-mt-20">
      <app-certifications></app-certifications>
    </div>
  `
})
export class HomeComponent { }
