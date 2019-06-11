import React,{Component}from 'react'
import {Link} from 'react-router-dom'

class ListBooks extends Component{
	constructor(props){
		super(props);
		this.state ={query:""};
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(book,e){
		let newShelf = e.target.value
		this.props.changeShelf(book,newShelf)
	}


	render(){
		let books = this.props.books

		return(
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.filter((book)=>book.shelf==="currentlyReading").map((book)=>(
                    	<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks?book.imageLinks.smallThumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif"})`}}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={(e)=>this.handleChange(book,e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors ? book.authors.join(',') : ''}</div>
                        </div>
                      	</li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.filter((book)=>book.shelf==="wantToRead").map((book)=>(
                    	<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks?book.imageLinks.smallThumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif"})`}}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={(e)=>this.handleChange(book,e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors ? book.authors.join(',') : ''}</div>
                        </div>
                      	</li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.filter((book)=>book.shelf==="read").map((book)=>(
                    	<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks?book.imageLinks.smallThumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif"})`}}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf} onChange={(e)=>this.handleChange(book,e)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors ? book.authors.join(',') : ''}</div>
                        </div>
                      	</li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">

              <Link to='/search'><button>Add a book</button></Link>

            </div>
          </div>
		)
	}
}
export default ListBooks