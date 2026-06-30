import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CoursesId } from '../model/courses';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Courses {
  private readonly httpClient = inject(HttpClient);

  test(): void {
    this.httpClient.get(environment.base_URL).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getApiId(): Observable<any> {
    return this.httpClient.get(environment.base_URL + '?_fields=id');
  }

  getApidata(id: string | number): Observable<any> {
    return this.httpClient.get(environment.base_URL + `/${id}`);
  }

  ngOnInit(): void {
    this.getApiId();
    this.getApidata(1885);
    this.test();
  }
}
function subscribe(arg0: { next: (res: any) => void; error: (err: any) => void }) {
  throw new Error('Function not implemented.');
}
