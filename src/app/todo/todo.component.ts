import { Task } from 'src/app/model/interface';
import { TaskService} from '../services/task.service';
import { Component, OnInit } from '@angular/core';
import { AppRoutingModule,routingcomponents } from "../app-routing.module";





@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})





export class TodoComponent implements OnInit {

  constructor(private objservice:TaskService) { }



  public newid:number=0;
  title = 'To-Do  App';
  public newtitle='';


  date: number = Date.now();



  public taskarray:Task[] =[];


  ngOnInit(): void
  {


      this.objservice.getdata().subscribe(data=>this.taskarray=data);
      //storing Observables data (fetched data from json) to taskarray   where taskarray should be of type Task cause of  typecasting issues

      this.newtitle='';      //clearing field

    }



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
                .subscribe();                         //rem  brother untill you subscribe the REST api operations they are not gonna work.

                this.ngOnInit();


                }

}
