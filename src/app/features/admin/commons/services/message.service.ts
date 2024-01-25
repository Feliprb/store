import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesComponent } from 'src/app/shared/components/messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string = '';
  type: string    = 'alert-info';

  constructor(private matSnackBar: MatSnackBar) { }

  add(message: string, type: string) {
    this.message = message;

    if (type) {
      this.type = `alert-${type}`;
    }

    this.matSnackBar.openFromComponent(MessagesComponent,
      { data: this.message, duration: 5000, panelClass: ['alert',this.type] }
    );
  }

  clear() {
    this.message = '';
  }

  close() {
    setTimeout(() => {
      this.clear();
    }, 3000);
  }
}
