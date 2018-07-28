import { Component } from '@angular/core';

@Component
({
  selector: 'sky-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  things = [`Hamak` , `Mis` , `Hak` , `Grzebien` , `Sofa`] ; 

  books = new Array<Book>() ; 

  constructor()
  {
    this.books.push(new Book(`Alicja w krainie czarow` , 2010) , new Book(`Piotrus Pan` , 2013) , 
    new Book(`Drzewa w butach` , 2014) )
  }
}
  class Book 
  {
    constructor(public name : string , public year : number) 
    {
      
    }
  }



