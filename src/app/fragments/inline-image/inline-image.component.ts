import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inline-image',
  templateUrl: './inline-image.component.html',
  styleUrls: ['./inline-image.component.css'],
})
export class InlineImageComponent implements OnInit {
  @Input() file: string;
  @Input() extension?: string = '.svg';

  constructor() {}

  ngOnInit(): void {}
}
