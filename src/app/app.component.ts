import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Todo } from './interface/todo';

interface Task {
  name: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'ANGULAR-MATERIAL-todoapp';

  inputValue: string = '';
  list: Array<Task> = [
    { name: 'task 1', isCompleted: true },
    { name: 'task 2', isCompleted: false },
  ];

  handleClick() {
    if (this.inputValue.trim() !== '') {
      this.add(this.inputValue);
      this.inputValue = '';
    }
  }

  handleKeyDown($event: KeyboardEvent): void {
    if ($event.keyCode === 13) {
    }
  }

  private add(name: string): void {
    this.list.push({
      name: name,
      isCompleted: false,
    });
  }

  remove(i: number): void {
    this.list.splice(i, 1);
  }
}
