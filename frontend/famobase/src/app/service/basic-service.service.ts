import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BasicService<
  T extends { _id: string | number; [key: string]: any }
> {
  apiUrl: string = environment.apiUrl;
  endString: string = '';

  constructor(private http: HttpClient) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}/${this.endString}`);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${this.endString}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${this.endString}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.endString}/${entity._id}`,
      entity
    );
  }

  delete(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}/${this.endString}/${entity._id}`
    );
  }
}
