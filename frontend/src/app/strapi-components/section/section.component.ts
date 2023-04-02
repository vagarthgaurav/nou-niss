import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() content: any;

  text: string = '';
  imageURL: string = '';
  imageOrientation = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.content);

    this.text = this.content.body;
    this.imageURL = this.content.image.data.attributes.url;
    this.imageOrientation = this.content.imageOrientation;
  }
}
