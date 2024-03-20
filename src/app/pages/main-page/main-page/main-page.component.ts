import { Component, OnInit } from '@angular/core';
// import data from '../../assets/data/card-data.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  ngOnInit() {
    // console.log(data);
  }

  columns = [
    {
      columnItem: [
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '3', '4', '1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2', '3', '4'],
        },
      ],
    },
    {
      columnItem: [
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '4', '1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '1', '2', '3', '4'],
        },
      ],
    },
    {
      columnItem: [
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2', '3', '4'],
        },
      ],
    },
    {
      columnItem: [
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4'],
        },
        {
          title: 'Basic',
          items: ['1', '2', '3', '4', '1', '2', '3', '4'],
        },
      ],
    },
  ];
}
