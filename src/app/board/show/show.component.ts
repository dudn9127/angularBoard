import { Component, OnInit } from '@angular/core';
import {BoardVO} from '../../VO/boardVO';
import {BoardService} from '../../service/board.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['../board.component.css', './show.component.css', '../create/create.component.css']
})
export class ShowComponent implements OnInit {

  public board = new BoardVO();
  public title?: string;
  public writer?: string;
  public content?: string;

  constructor(private boardService: BoardService) {
    this.boardService.changeBoard.subscribe(data => {
      this.board = data;
      this.title = this.board.title;
      this.writer = this.board.writer;
      this.content = this.board.content;
    });
  }

  ngOnInit(): void {
  }

  updatePost(): void{
    this.board.title = this.title;
    this.board.writer = this.writer;
    this.board.content = this.content;
    this.boardService.sendBoard2(this.board, 'update');
    alert('updated');
  }
}
