import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NOTES } from 'src/notes';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);
  router = inject(Router)

  deleteNote() {
    if(this.note === undefined) {
      return;
    }

    let index = NOTES.indexOf(this.note, 0);
    NOTES.splice(index, 1);

    this.router.navigateByUrl('');
  }
}
