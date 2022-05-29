import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasicService<
  T extends { id: string | number; [key: string]: any }
> {
  apiUrl: string = environment.apiUrl;
  entity: string = '';

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.entity}`);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entity}/${id}`);
  }

  create(entity: T): Observable<T> {
    const newEntity = { ...entity, id: null };
    return this.http.post<T>(`${this.apiUrl}/${this.entity}`, newEntity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.entity}/${entity.id}`,
      entity
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.entity}/${entity.id}`);
  }
}
