import { Component } from '@angular/core';
import { Page, PartForm } from '../page';
import { WikiService } from '../wiki.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  public id: string
  public page: Page
  public part_page: Array<PartForm> = []

  constructor (
    private service: WikiService, 
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id")! //fix
    this.page = this.service.getPage("balls")
  }

  ngOnInit() {
    for (let i = 0; i < this.page.content.length; i++) {
      let placeholder = ""
      for (let j = 0; j < this.page.content[i].length; j++) {
        placeholder += this.page.content[i][j]
      }
      this.part_page.push({
        headings: this.page.headings[i], 
        content: placeholder, 
        index: i
      })
    }
  }

  send(event: Event) {
    this.service.sendRequest(this.id, event)
  }

}