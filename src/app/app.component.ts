import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "myfirstapp";
  no1: number = 0;
  no2: number = 0;
  ans: number = 0;
  name: string = "jinal shah";
  str: string = "hello";
  Id: number;
  Title: string;
  Status: string;
  arr: string[] = ["jinal", "shah", "abc"];

  tasks: any[] = [
    { Id: 1, Title: "xyz", Status: "pending" },
    { Id: 2, Title: "abc", Status: "done" }
  ];
  fun1() {
    alert("hello");
  }
  onAdd() {
    this.ans = this.no1 + this.no2;
  }
  onAddTask() {
    let obj = { Id: this.Id, Title: this.Title, Status: this.Status };
    this.tasks.push(obj);
  }
  onDeleteTask(item) {
    let x = this.tasks.indexOf(item);
    this.tasks.splice(x, 1);
  }
}
