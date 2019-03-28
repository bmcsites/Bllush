// Angular's
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  // create call to server to get Suggestions.
  getSuggestions() {
    return this.http.get('https://api.bllush.com/sandbox/get-stories-details.json');
  }
}
