import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBooks from './SearchBooks.js'

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    searchResult:[]
   };
  this.changeShelf = this.changeShelf.bind(this);
  this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books:books})
    })
  }
  changeShelf(book,newShelf){
    BooksAPI.update(book,newShelf).then(()=>{
      book.shelf = newShelf;
      this.setState((state)=>({
        books:state.books.filter(b=>b.id!==book.id).concat(book)

      }))
    })
  }

  searchBooks(keyword){
    if(keyword){
    BooksAPI.search(keyword).then((response)=>{
      if(Array.isArray(response)){
        this.setState({searchResult:response})
      }else{
        this.setState({searchResult:[]})
      }
    })
    }
  }

  render() {
    return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/search" render={()=>(
          <SearchBooks
              searchBooks={this.searchBooks}
              books = {this.state.books}
              changeShelf = {this.changeShelf}
              searchResult = {this.state.searchResult}
          />
        )}/>
        <Route exact path='/' render={()=>(
          <ListBooks
              books = {this.state.books}
              changeShelf={this.changeShelf}
          />
        )}/>
        <Route render={()=>(
          <div><p><b>Page not found,please check your url.</b></p></div>
        )}/>
      </Switch>
      </div>
    </Router>
    )
  }
}

export default BooksApp
