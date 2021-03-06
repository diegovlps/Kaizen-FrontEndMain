import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/postulante';

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  constructor(private http: HttpClient) { }

  Publicar(id:any,idpuesto:any): Observable<any> {

    var puestotrabajo: FormData = new FormData();

    puestotrabajo.append('idpuestotrabajo', idpuesto);

    return this.http.post(
      baseUrl+`/${id}/postular/puestotrabajo`,
      puestotrabajo
    );
}

}
