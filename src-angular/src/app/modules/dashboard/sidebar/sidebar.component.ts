import { Component } from '@angular/core';
import {SectionService} from "../../core/services/section.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private sectionService: SectionService) { }

  selectSection(section: string): void {
    this.sectionService.selectSection(section);
  }

}
