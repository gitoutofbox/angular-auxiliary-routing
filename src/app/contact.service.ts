import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactSubject : Subject<any>;
  private contactSubject$ = new Subject<any>();
  constructor() { }
  setContact(contactDetail: any): void {
    this.contactSubject$.next(contactDetail);
  }

  getContact(): Observable<any> {
    return this.contactSubject$.asObservable();
  }
}
