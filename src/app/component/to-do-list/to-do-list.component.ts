import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  Injectable,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/interface/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ToDoListComponent implements OnInit {
  constructor() {}

  public taskList: Task[] = [];

  ngOnInit() {}

  addTask() {
    this.taskList.push(new Task());
  }

  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }
}
