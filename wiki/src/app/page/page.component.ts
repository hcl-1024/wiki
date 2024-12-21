import { Component } from '@angular/core';
import { Page } from '../page';
import { WikiService } from '../wiki.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  public id: string
  public page: Page

  constructor (
    private service: WikiService, 
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id")! //fix
    this.page = this.service.getPage(this.id)
  }
}