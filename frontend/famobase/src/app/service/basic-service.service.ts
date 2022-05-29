import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasicService<
  T extends { _id: string | number; [key: string]: any }
> {
  apiUrl: string = environment.apiUrl;
  entity: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.entity}`);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.entity}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.entity}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.entity}/${entity._id}`,
      entity
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${this.entity}/${entity._id}`);
  }
}
