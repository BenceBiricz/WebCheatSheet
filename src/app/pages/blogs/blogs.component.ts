import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor(private router: Router) {}

  blogs = [
    {
      title: 'The Power of Cheat Sheets: A Shortcut to Learning',
      text: 'Are you looking for a quick and effective way to learn new things? Look no further than cheat sheets.',
      img: 'coding.png',
      data: 'power_of_cheat_sheets',
    },
    {
      title: 'A Quick Guide to Web Development Learning Path',
      text: `Embarking on a journey to become a proficient web developer requires a structured approach. Here's a concise roadmap to guide you through the essential concepts.`,
      img: 'monitors.jpg',
      data: 'web_dev_guide',
    },
  ];

  openArticle(file: string) {
    this.router.navigate(['articles'], { queryParams: { article: file } });
  }
}
