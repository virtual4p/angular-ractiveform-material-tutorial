import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  newNoteForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.newNoteForm = this.fb.group({
      title: [null, [Validators.required,
        Validators.maxLength(30),
        Validators.minLength(15),
        ]],
      notetext:  [null, [Validators.required,
        Validators.maxLength(150),
        Validators.minLength(50),
        ]],
    });
  }

  onSubmit() {
    if (this.newNoteForm.valid) {
      // Aktion zum Speichern aufrufen
      console.log('Die Notiz wurde gespeichert.');
    }
  }
}
