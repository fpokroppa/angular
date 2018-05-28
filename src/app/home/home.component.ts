import {Component, OnInit} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {DataService} from '../_data/data.service';
import {User} from '../_models/user';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px', offset: .3}),
            style({opacity: 1, transform: 'translateY(0', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%', offset: 1}),
          ]))]), {optional: true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = [];

  currentUser: User;
  users: User[] = [];

  constructor(private _data: DataService, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);

    this.loadAllUsers();
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
