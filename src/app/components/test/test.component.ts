
import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

  username: string = '';
  users: any;
  movies: any;
  input: any;
  search: any;
  button: any;
  btnSearch: any;
  myDiv:any;
  moviesIsDone: boolean = false;
  @HostListener('window:load')

  getUsers(value: any) {
    //bu metodun adı servisteki ile aynı olmak zorunda değil
    this.userServise.getUsers(value.target.value).subscribe((res) => {
      this.users = res.results;
      this.movies = this.users.slice(0, 10);
      console.log(res.results);
    });
  }
 

  route() {
    console.log('tıkladın');
  }
  constructor(private userServise: UserService) {}

  ngOnInit(): void {
    // this.input = document.createElement('input');
    // this.input.setAttribute('type', 'text');
    // this.input.classList.add('searchInput');
    // this.input.setAttribute('type', 'text');
    // this.input.setAttribute('value', 'bts');
    // this.input.setAttribute('placeHolder', 'text');
    // this.input.setAttribute('backgroundcolor', 'white');
    // this.input.setAttribute('margin-top', '-100px');
    // this.input.setAttribute('id', 'userText');
    // this.input.classList.add("movieSearchInput")
    // document.body.appendChild(this.input);
    // this.button = document.createElement('button');
    // this.button.setAttribute("id","btnSearch")
    // this.button.classList.add("btnSearch")
    // this.button.innerHTML = 'kaydet';
    // this.button.setAttribute("color","blue")
    // document.body.appendChild(this.button);
    // this.button?.addEventListener('click',this.getUsers(this.input.value))
    // console.log(this.button)
    // this.username = this.userServise.userName;
    // if (this.input.value === null) {
    //   this.getFirstMovies();
    // }
    this.input=document.getElementById("text")
    
  
    
    this.getFirstMovies();
  }

  getFirstMovies() {
    this.userServise.getFirstMovies().subscribe((res) => {
      
      // res = JSON.parse(res.toString())
      // res = JSON.parse(JSON.stringify(res));
      console.log('res : ', res)
      this.users = res.results

      // this.users = this.users.filter(x => x["primaryImage"] != null)
      this.movies = this.users.slice(0, 10);
      
      console.log('movies  : ', this.movies);
      
      console.log('this.users : ', this.users)
    
    });
  }

  @HostListener("document:scroll")
  scrollFunction() {
    const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    console.log(document.documentElement.scrollHeight )
    console.log(document.documentElement.clientHeight)
    console.log('Math.ceil(scrolled) : ', Math.ceil(scrolled))
    console.log('scrollable : ', scrollable)
    if (Math.ceil(scrolled) === scrollable ) {
      this.users = this.users.splice(10)

      this.movies = [...this.movies, ...this.users.slice(0, 10)];
      
    }
    if(this.users.length===0){
      this.moviesIsDone=true
      
    } 
    console.log(this.moviesIsDone
      )   
  }
}
