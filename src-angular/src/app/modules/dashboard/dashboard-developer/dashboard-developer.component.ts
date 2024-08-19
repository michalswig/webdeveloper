import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ConfigService} from "../../core/services/config.service";
import {AuthenticationService} from "../../core/services/authentication.service";
import {SectionService} from "../../core/services/section.service";

@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.scss']
})
export class DashboardDeveloperComponent implements OnInit {

  selectedSection: string | null = null;
  loggedInUsername: string | null = null;

  constructor(
    public authService: AuthenticationService,
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    this.sectionService.selectedSection$.subscribe(section => {
      this.selectedSection = section;
    });
  }

}
