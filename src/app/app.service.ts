// Angular's
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  // create call to server to get Suggestions.
  getSuggestions() {
    return this.http.get('https://api.bllush.com/sandbox/get-stories-details.json').pipe(
      map(data => data['data'].stories.map( item => {
        delete item.id;
        delete item.publish_date;
        delete item.trends_detected;
        delete item.language;
        return item;
      })));
  }
}
