import { Injectable } from '@angular/core';
import { Task } from '../model/interface';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor(private Objhttp: HttpClient) { }



private URL:string="http://localhost:3000/tasks";
// abv is link of   server created the same machine.
// for starting this server we need to install json server plugin and with correct file path execute "json-server --watch db.json"
//now on abv link itll show  all data which lies in the db.json file.
//it'll work like a real time Web server .


  pushdata(data:Task):Observable<Task>
  {


      return this.Objhttp.post<Task>(this.URL,data,
        { headers: new HttpHeaders({'Content-Type': 'application/json'})  }       )

  }



getdata():Observable<Task[]>
{
return this.Objhttp.get<Task[]>(this.URL);

}


deletetask(x:number):Observable<any>
{

return   this.Objhttp.delete(this.URL+"/"+x);
  
}


}
