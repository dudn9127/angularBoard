import { Injectable } from '@angular/core';
import { BoardVO } from '../VO/boardVO';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService{

  public boardList = [{ id: 0, title: 'Title 1', writer: 'TBZ Q', content: 'no more I am down for you' },
    { id: 1, title: 'Title 2', writer: 'LJH', content: 'I \'m the stealer' },
    { id: 2, title: 'Title 3', writer: 'NEW', content: 'You break the rules' },
    { id: 3, title: 'Title 4', writer: 'SUNWOO', content: 'A whole new world' }];
  private subject = new Subject<BoardVO>();
  public changeBoard = this.subject.asObservable();

  constructor() {

  }

  public sendBoard(board: BoardVO): void{
    // @ts-ignore
    this.subject.next(board);
  }

  public sendBoard2(board: BoardVO, type: string): void{
    board.type = type;
    this.subject.next(board);
  }

  public sendBoardId(boardId: number): void{
    // @ts-ignore
    this.subject.next(boardId);
  }

  /*createBoard(newBoard: BoardVO): void{
    newBoard.type = 'create';
    this.sendBoard(newBoard);
  }

  updateBoard(newBoard: number): void{

  }*/

  deleteBoard(id: number): void{

  }

}
