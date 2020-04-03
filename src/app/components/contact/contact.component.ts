import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }
  setContactDetail(data) {
    this.contactService.setContact(data);
  }
}
