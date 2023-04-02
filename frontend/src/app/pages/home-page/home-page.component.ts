import { Component, OnInit } from '@angular/core';
import { HomePageResponse } from 'src/app/services/api/models';
import { HomePageService } from 'src/app/services/api/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  pageComponents = [];

  constructor(private pageService: HomePageService) {}

  ngOnInit(): void {
    this.pageService.getHomePage({ populate: 'deep' }).subscribe((res: any) => {
      console.log(res);

      this.pageComponents = res.data.attributes.pageComponents;
    });
  }
}
