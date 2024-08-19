import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private selectedSectionSubject = new BehaviorSubject<string | null>(null); // Initially null
  selectedSection$ = this.selectedSectionSubject.asObservable();

  constructor() {
    // Optionally, load the initial section from local storage or a default value
    const initialSection = localStorage.getItem('selectedSection');
    if (initialSection) {
      this.selectedSectionSubject.next(initialSection);
    }
  }

  selectSection(section: string): void {
    this.selectedSectionSubject.next(section);
    localStorage.setItem('selectedSection', section); // Save the user's selection
  }

  clearSection(): void {
    this.selectedSectionSubject.next(null);
    localStorage.removeItem('selectedSection'); // Remove from local storage
  }
}
