import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-contact',
  template: '', // No HTML content, it's a dynamic loader only
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private contactComponentTrigger: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.triggerContactComponentLoading();
  }

  triggerContactComponentLoading() {
    this.contactComponentTrigger.next();
  }

}
