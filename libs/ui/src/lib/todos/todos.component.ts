import { Component, Input } from '@angular/core';
import { To } from '../types/to.type';
import { SomeService, Todo } from '@org/core';
@Component({
  selector: 'org-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [SomeService],
})
export class TodosComponent {
  @Input() todos: Todo[];
  text;
  textTo: To;
  constructor(private some: SomeService) {
    this.text = some.text;
  }
}
