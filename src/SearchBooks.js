import React,{Component}from 'react'
import {Link} from 'react-router-dom'

class SearchBooks extends Component{
	state={query:""}
	updateQuery=(query)=>{
		this.setState({query:query.trim()});
		this.props.searchBooks(query);
	}

	render(){

		let storeBooks = this.props.books
		let searchResult = this.props.searchResult

		if(searchResult && storeBooks){
			searchResult.map((book)=>
				storeBooks.find(item=>item.id ===book.id)?book.shelf=storeBooks.find(item=>item.id ===book.id).shelf:book.shelf="none"
			)
		}else{
			searchResult = [];
		}

		return(
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link to="/">
	              	<button className="close-search" >Close</button>
	              </Link>
	              <div className="search-books-input-wrapper">
	                {/*
	                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
	                  You can find these search terms here:
	                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	                  you don't find a specific author or title. Every search is limited by search terms.
	                */}
	                <input
	                	type="text"
	                	placeholder="Search by title or author"
	                	value={this.state.query}
	                	onChange = {(event)=>this.updateQuery(event.target.value)}

	                />
	              </div>
	            </div>

	            <div className="search-books-results">
	              <ol className="books-grid">
	              	{searchResult.map((book)=>(
                    	<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks?book.imageLinks.smallThumbnail:"https://books.google.com/googlebooks/images/no_cover_thumb.gif"})`}}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={book.shelf?book.shelf:"none"} onChange={(e)=>this.props.changeShelf(book,e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
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
		)
	}
}
export default SearchBooks