import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
// posts=[
//   // {title: 'First Post', content: 'This is First Content'},
//   // {title: 'Second Post', content: 'This is Second Content'},
//   // {title: 'Third Post', content: 'This is Third Content'}
// ];
 @Input() posts =[];
}
