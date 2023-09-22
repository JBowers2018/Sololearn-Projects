import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { AddNoteComponent } from 'src/add-note/add-note.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    HeaderComponent, 
    NotesListComponent,
    AddNoteComponent
  ]
})
export class AppComponent {
  
}
