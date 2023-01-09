import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'margin-note',
  templateUrl: './margin-note.component.html',
  styleUrls: ['./margin-note.component.css'],
})
export class MarginNoteComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
