import React from 'react'

class ChangeShelf extends Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		const shelf = e.target.value;
		let book = this.book;
		this.props.changeShelf(book,shelf);
	}
	render(){
		return(
			<div className="book-shelf-changer">
                <select  onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
		)
	}
}