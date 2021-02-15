import { Component, OnInit } from '@angular/core';
import {BoardVO} from '../../VO/boardVO';
import {BoardService} from '../../service/board.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../board.component.css', './create.component.css']
})
export class CreateComponent implements OnInit {

  public boardId?: number;
  public title?: string;
  public writer?: string;
  public content?: string;
  public board?: BoardVO;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
  }

  createPost(): void{
    this.board = new BoardVO();
    this.board.id = this.boardId;
    this.board.title = this.title;
    this.board.writer = this.writer;
    this.board.content = this.content;
    this.boardService.sendBoard2(this.board, 'create');
    alert('succeeded');
  }

}
