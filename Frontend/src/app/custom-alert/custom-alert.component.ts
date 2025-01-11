import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {RepositoryService} from '../services/repository.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.css'
})


export class CustomAlertComponent {
  title: string = 'Date selection';
  message: string = 'Are you sure?';
  showInput: boolean = true;
  userInput: string = '';

  constructor(
    public dialogRef: MatDialogRef<CustomAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private repositoryService: RepositoryService
  ) {
    if (data) {
      this.title = data.title || this.title;
      this.message = data.message || this.message;
      this.showInput = data.showInput || true;
    }
  }

  onCancel(): void {
    this.dialogRef.close(null); // User clicked Cancel
  }

  onConfirm(): void {
    this.repositoryService.updateEvent({title: this.userInput, start: this.data.event.start, end: this.data.event.end, Identifier: this.data.event.Identifier}).subscribe();
    // console.log(this.data.userInput);
    // console.log(this.userInput);
    // this.repositoryService.updateEvent({title: 'PP', start: this.data.event.start, end: this.data.event.end, Identifier: this.data.event.Identifier}).subscribe();
    // window.location.reload();
    this.dialogRef.close(this.userInput);
  }
}
