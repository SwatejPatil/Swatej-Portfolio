import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Resume } from '../models/resume.model';

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    private http = inject(HttpClient);
    private dataUrl = 'assets/resume.json';

    private resume$: Observable<Resume> | null = null;

    getResume(): Observable<Resume> {
        if (!this.resume$) {
            this.resume$ = this.http.get<Resume>(this.dataUrl).pipe(
                shareReplay(1)
            );
        }
        return this.resume$;
    }
}
