import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  taskList: Array<string> = [];
  task!: string;

  addToList(task: string) {
    console.log(task);
    if (task !== "" && task !== undefined) {
    this.taskList.push(this.task);
    this.task = ""
    }

  }
  
  removeFromList(index: number) {
    delete this.taskList[index];
    this.taskList = this.taskList.filter(data => data !== null)
  }

}
