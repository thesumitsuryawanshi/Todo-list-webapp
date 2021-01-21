import { Task } from 'src/app/model/interface';
import { TaskService} from '../services/task.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})





export class TodoComponent implements OnInit {




  public newid:number=0;
  title = 'To-Do  App';
  public newtitle='';


  date: number = Date.now();
  public taskarray:Task[] =[];
  public taskarray_lngth:number=0;
public progress:number=0;


  ngOnInit(): void
  {


      this.objservice.getdata().subscribe(data=>this.taskarray=data);
      //storing Observables data (fetched data from json) to taskarray   where taskarray should be of type Task cause of  typecasting issues

      this.newtitle='';      //clearing field
      this.taskarray_lngth=this.taskarray.length+1;
      this.progress=this.taskarray_lngth*10;

    }

    constructor(private objservice:TaskService) { }


    addtask()
            {
                  this.objservice.pushdata(       {id:this.newid,title:this.newtitle}     )
                  .subscribe (
                                (data:Task)=>{console.log(data);}         //printing entered id and task  to the console
                              );



                      this.ngOnInit();

          }

        deletetask(x:any)
                {

                this.objservice.deletetask(x)
                .subscribe();                         //rem  brother untill you subscribe the CRUD methods they are not gonna work.

                this.ngOnInit();


                }

}
