import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PublicacionService} from './publicacion.service';
import { TokenStorageService } from 'src/app/util/token-storage.service'

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: []
})
export class PublicacionComponent implements OnInit {
  currentUser: any;

  constructor( private fb: FormBuilder,
               private publicacionservice: PublicacionService,
               private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }


  public puestostrabajoform = this.fb.group({     
    
    nombrePuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    ciudadPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    categoriaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    trabajoremotoPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])),        
    tipojornadaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    sueldoPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    experienciaPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])), 
    descripcionPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ])),
    periodopublicidadPuestoTrabajo: new FormControl('', Validators.compose([
      Validators.required
    ]))
  });

  Publicarempleo(): void {
    
    
    var puestowork: any = {
      
      nombrePuestoTrabajo: this.puestostrabajoform.controls['nombrePuestoTrabajo'].value,
      ciudadPuestoTrabajo: this.puestostrabajoform.controls['ciudadPuestoTrabajo'].value,
      categoriaPuestoTrabajo: this.puestostrabajoform.controls['categoriaPuestoTrabajo'].value,
      trabajoremotoPuestoTrabajo: this.puestostrabajoform.controls['trabajoremotoPuestoTrabajo'].value,
      tipojornadaPuestoTrabajo: this.puestostrabajoform.controls['tipojornadaPuestoTrabajo'].value,
      sueldoPuestoTrabajo: this.puestostrabajoform.controls['sueldoPuestoTrabajo'].value,
      experienciaPuestoTrabajo: this.puestostrabajoform.controls['experienciaPuestoTrabajo'].value,
      descripcionPuestoTrabajo: this.puestostrabajoform.controls['descripcionPuestoTrabajo'].value,
      periodopublicidadPuestoTrabajo: this.puestostrabajoform.controls['periodopublicidadPuestoTrabajo'].value
    }

    this.publicacionservice.Publicar(puestowork,this.currentUser.idReclutador).subscribe(
      data => {
        console.log(data);
    });
  }




}
