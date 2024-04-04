import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit {
  dataPath = 'power_of_cheat_sheets';
  data: any;
  loaded = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.dataPath = params['article'];
    });

    this.http
      .get('assets/articles/' + this.dataPath + '.json')
      .subscribe((data: any) => {
        if (data) {
          this.data = data!;
          this.loaded = true;
        }
      });
  }

  back() {
    history.back();
  }
}
