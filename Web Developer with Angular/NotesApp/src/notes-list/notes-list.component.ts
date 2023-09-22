import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NOTES } from 'src/notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
