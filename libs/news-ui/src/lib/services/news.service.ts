import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment} from '@cactus/environment-ui';
import { News } from '@cactus/shared';


@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  public getNews$(type: string): Observable<News[]> {
    return <Observable<News[]>>this.httpClient.get(environment.apiUrl + '/api/' + type);
  }
}
