import {Component, OnInit} from '@angular/core';
import {SearchResultDeveloperModel} from "../../core/models/searchResultDeveloper.model";
import {DeveloperService} from "../../core/services/developer.service";

@Component({
  selector: 'app-contact-antal',
  templateUrl: './contact-antal.component.html',
  styleUrls: ['./contact-antal.component.scss']
})
export class ContactAntalComponent implements OnInit {

  developers!: SearchResultDeveloperModel;

  constructor(private service: DeveloperService) {
  }

  ngOnInit(): void {
    this.getDevelopers();
  }

  getDevelopers() {
    this.service.fetchDevelopers().subscribe(data => {
      this.developers = data;
    });
  }
}
