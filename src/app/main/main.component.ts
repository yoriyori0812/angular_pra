import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Person, SearchpersonService } from '../service/searchperson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = {
    id: '初期ID',
    name: '初期パスワード',
    address: '初期の住所です'
  }

  person:Person | undefined;

  constructor(
    private searchpersonservice: SearchpersonService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  loginid = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]);

  getErrorMessage(type: String) : String {
  switch (type) {
    case "loginid":
      console.log('ログインIDエラーチェック開始');
      if (this.loginid.hasError('required')) {
        console.log('ログインID未入力エラー検知');
        return 'ログインIDを入力してください。';
      } else if (this.loginid.hasError('minlength'))　{
        console.log('ログインID最低文字数エラー検知');
        return 'ログインIDは3文字以上です。';
      } else {
        return '';
      }
    default:
      return '';
  }
}

onClicked(): void {
  this.authenticatePerson(this.user.id);
}

authenticatePerson(id: string) {
  this.searchpersonservice.search(id)
  .then((data) => {
  if(data.id != undefined) {
    this.searchpersonservice.setIsPerson(true);
  }
  this.goToLoginedPage();
  })
}

goToLoginedPage(): void {
  this.router.navigate(['../work/logined']);
}

}
