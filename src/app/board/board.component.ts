import { Component, OnInit } from '@angular/core';
import {BoardService} from '../service/board.service';
import {BoardVO} from '../VO/boardVO';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public selection = '';
  public board = new BoardVO();
  public boardList = [{ id: 0, title: 'Title 1', writer: 'TBZ Q', content: 'no more I am down for you' },
    { id: 1, title: 'Title 2', writer: 'LJH', content: 'I \'m the stealer' },
    { id: 2, title: 'Title 3', writer: 'NEW', content: 'You break the rules' },
    { id: 3, title: 'Title 4', writer: 'SUNWOO', content: 'A whole new world' }];

  public boards = this.boardList;
  public pageArr = [] as any;
  public pageSize = 3;
  public pageCnt = 0;
  public currentPage = 1;

  constructor(private boardService: BoardService) {
     this.getBoardList(1, this.pageSize);
     this.pageUpdate();

     this.boardService.changeBoard.subscribe(data => {
      // tslint:disable-next-line:no-conditional-assignment
      if (data.type === 'create'){
        const newId = ! this.boardList.length ? 1 : this.boardList[this.boardList.length - 1].id + 1;
        data.id = newId;
        data.type = '';
        // @ts-ignore
        this.boardList.push(data);
        // 게시물을 추가해 페이지가 늘어날 경우를 위해
        this.currentPage = Math.ceil(this.boardList.length / this.pageSize);
        this.pageUpdate();
        this.getBoardList(this.currentPage, this.pageSize);
      }
      else if (data.type === 'update'){
        // tslint:disable-next-line:only-arrow-functions typedef
        const idx = this.boardList.findIndex(function(board){
          return board.id === data.id;
        });
        this.boardList[idx].title = data.title + '';
        this.boardList[idx].writer = data.writer + '';
        this.boardList[idx].content = data.content + '';
        this.getBoardList(this.currentPage, this.pageSize);
      }
    });
  }

  ngOnInit(): void {}

  // 게시물 내용 띄우기
  public showBoard(boardId: number): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    const idx = this.boardList.findIndex(function(board){
      return board.id === boardId;
    });
    this.boardService.sendBoard(this.boardList[idx]);
  }

  // 게시물 삭제
  public deleteBoard(boardId: number): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    const idx = this.boardList.findIndex(function(board){
      return board.id === boardId;
    });

    // 게시물을 삭제해서 페이지가 줄어들 경우
    if ((this.boardList.length - 1) % this.pageSize === 0){
      this.currentPage --;
    }
    this.boardList.splice(idx, 1);
    this.pageUpdate();
    this.getBoardList(this.currentPage, this.pageSize);
  }

  // 페이지에 따른 board 불러오기
  public getBoardList(page: number, size: number): void{
    this.currentPage = page;
    const startPage = (page - 1) * size;
    this.boards = this.boardList.slice(startPage, startPage + size);
  }

  // 페이지 순번 불러오기
  public pageUpdate(): void{
    this.pageCnt = Math.ceil(this.boardList.length / this.pageSize);
    this.pageArr = new Array(this.pageCnt);
  }
}
