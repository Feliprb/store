import { Component, Inject, OnInit } from '@angular/core';
import { MessageService } from 'src/app/features/admin/commons/services/message.service';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],

})
export class MessagesComponent  {

  constructor(
    public messageService: MessageService,
    @Inject(MAT_SNACK_BAR_DATA) public data: string
  ) { }

  ngOnInit(): void {
  }

}
