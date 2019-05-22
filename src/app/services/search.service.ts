import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<any[]> {
    if (term === '') {
      return of([]);
    }

    return this.http.get<any>('/api/search?q=' + term).pipe(map(response => response));
  }
}
