import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.css']
})
export class RenderFormComponent implements OnInit {

  @Output() numberOfComponents = new EventEmitter<number>();


  constructor() { }

  onAddClick(count:any) {
    this.numberOfComponents.emit(count);
  }

  handleRemoveComponents() {
    this.numberOfComponents.emit(0);
  }

  ngOnInit(): void {
  }

}
