import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http :Http){
        console.log("task service init...");
    }
    getTasks(){
        console.log("tasks");
            return this.http.get('http://localhost:3000/api/tasks').map(res=> 
            
            res.json());
    }
    getTrack() {
        console.log("tracks");
        return this.http.get('http://localhost:3000/api/tracks').map(res => res.json());


    }
    addTask(newTask) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), { headers: headers })
            .map(res => res.json());
    }

    getGenre() {
        return this.http.get('http://localhost:3000/api/genres').map(res => res.json());


    }




    
}