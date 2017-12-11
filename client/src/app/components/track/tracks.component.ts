import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Track } from "../../../Track";
import { Router } from '@angular/router';
import { UrlSegmentGroup } from '@angular/router';
import { Data } from '@angular/router';

@Component({
    moduleId: module.id ,
    selector: 'tracks',
    templateUrl: 'tracks.component.html'
})
export class TracksAppComponent {
    tracks: Track[];
    songs:string;
    static urlArray;
    values = '';

    
    constructor(private taskService: TaskService){
        UrlComponent.urlArray = "Inside Contructor";
        this.Gettask();
        this.taskService.getTrack()
        .subscribe(tracks => {console.log(tracks);})
       
    }
    get staticUrlArray() {
        return UrlComponent.urlArray;
    }
   
   Gettask(){
           
       this.taskService.getTrack().subscribe(tracks => { this.tracks = tracks})
     console.log(this.tracks);
   }


    addtrack(event) {
        this.values += event.target.value + ' | ';
        console.log(this.values);
        alert(console.log(this.values));
           
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

    // deleteTask(id) {
    //     var tasks = this.tasks;

    //     this.taskService.deleteTask(id).subscribe(data => {
    //         if (data.n == 1) {
    //             for (var i = 0; i < tasks.length; i++) {
    //                 if (tasks[i]._id == id) {
    //                     tasks.splice(i, 1);
    //                 }
    //             }
    //         }
    //     });
    // }

   
    



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


