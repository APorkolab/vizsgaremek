import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroundService<
  T extends { _id: string | number; [key: string]: any }
> {
  apiUrl: string = environment.apiUrl;
  entity: string = '';

  constructor(private http: HttpClient) {}

  //Create
  create(entity: T): Observable<T> {
    const newEntity = { ...entity, _id: 0 };
    return this.http.post<T>(`${this.apiUrl}/${this.entity}`, newEntity);
  }

  //Read
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.entity}`);
  }

  getOne(_id: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entity}/${_id}`);
  }

  //Update
  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.entity}/${entity._id}`,
      entity
    );
  }

  //Delete
  delete(id: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.entity}/${id}`);
  }
}
