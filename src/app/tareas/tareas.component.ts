import { Component, OnInit } from '@angular/core';
import { TareaPendiente } from './tarea-pendiente';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent implements OnInit{
  constructor(private tareasServices: TareasService) {}
  nombreTarea = ""

  public tareas: TareaPendiente[] = []
  saveTarea(){
    const nuevaTarea = new TareaPendiente(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.tareasServices.guardarTareas(this.tareas);
    this.obtenerTareas();
    //Limpiamos el input
    this.nombreTarea = "";
  }

  eliminarTarea(indice: number){
    const confirma = confirm("¿Realmente Desea Eliminar La Tarea?")
    if(!confirma){
      return;
    }

    //Eliminar y guardar
    this.tareas.splice(indice, 1);
    this.tareasServices.guardarTareas(this.tareas);
  }

  cambiarEstadoTarea(){
    this.tareasServices.guardarTareas(this.tareas);
  }

  obtenerTareas(){
    this.tareas = this.tareasServices.obtenerTareas();
  }

  ngOnInit(){
    this.obtenerTareas();
  }
}
