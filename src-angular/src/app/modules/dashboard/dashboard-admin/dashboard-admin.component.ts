import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";
import { SectionService } from "../../core/services/section.service";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  selectedSection: string | null = null;
  loggedInUsername: string | null = null;

  constructor(
    public authService: AuthenticationService,
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    // Ensure we start with no section selected
    this.sectionService.clearSection();
    this.sectionService.selectedSection$.subscribe(section => {
      this.selectedSection = section;
    });
  }
}
