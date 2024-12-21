import { Injectable } from '@angular/core';
import { Page, PartForm } from './page';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  private url = "balls"

  constructor(
    private httpClient: HttpClient
  ) { }

  getPage(id: string) {
    let page;
    this.httpClient.get(`${this.url}/${id}`)
      .subscribe(results => {
        page = results
      })
    return page
  }

  sendRequest(id: string, content: any) {
    let body = {
      id: "",
      title: "", 
      headings: "", 
      content: ""
    }
    body.id = id
    if (typeof content == "string") {
      body.title = content
    } else if (typeof content == "object") {
      body.headings = content.headings, 
      body.content = content.content
    }
    this.httpClient.post(`${this.url}/request_edit`, body)
  }
}