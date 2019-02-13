import React from 'react';
import {connect} from 'react-redux';


class BookDetail extends React.Component{
  render(){
    if(!this.props.activeBook){
      return(
        <div>Select a book on sidebar to view details:</div>
      )
    }
    return(
      <div>
        <h1>Details:</h1>
        <h2>Book Title: {this.props.activeBook.title}</h2>
        <h2>Author:{this.props.activeBook.author}</h2>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    activeBook : state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
