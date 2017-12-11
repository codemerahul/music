import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from "../../../Task";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { Data } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TasksAppComponent {
    
    tracks: Task[];
    songs: string;
    constructor( private taskService: TaskService) {          
      this.taskService.getTasks()
            .subscribe(tasks => { console.log(tasks); })
    } 

    addTask(event) {
        event.preventDefault();
        var newTask = {
            tracks: this.songs
        }
        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tracks.push(task);
                this.songs = '';
            });
    }



  
}

export class UrlComponent {

    static urlArray;
    constructor() {
        UrlComponent.urlArray = "Inside Contructor";
    }

    get staticUrlArray() {
        return UrlComponent.urlArray;
    }

}

