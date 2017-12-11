import { Component } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Genre } from '../../../Genre';
@Component({
    moduleId: module.id,
    selector: 'genres',
    templateUrl: 'genres.component.html'
})
export class GenresAppComponent {
    genres: Genre[];
    name: string;
    constructor(private  taskService: TaskService ){
        this.taskService.getGenre()
           .subscribe(genres => { this.genres = genres} )
    }
}


