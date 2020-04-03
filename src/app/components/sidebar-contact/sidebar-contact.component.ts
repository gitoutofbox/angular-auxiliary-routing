import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-sidebar-contact',
  templateUrl: './sidebar-contact.component.html',
  styleUrls: ['./sidebar-contact.component.sass']
})
export class SidebarContactComponent implements OnInit {
  contact: any;
  constructor(private contactService: ContactService) {
    this.contactService.getContact().subscribe(data => {
      this.contact = data;
    })
   }

  ngOnInit(): void {
  }

}
