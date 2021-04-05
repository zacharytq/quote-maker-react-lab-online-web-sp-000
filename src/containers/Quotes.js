import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  upvote = id => {
    this.props.dispatch(upvoteQuote(id));
  }

  downvote = id => {
    this.props.dispatch(downvoteQuote(id));
  }

  makeQuoteCards() {
    return this.props.quotes.map(quote => {
      <QuoteCard quote={quote} upvote={this.upvote} downvote={this.downvote} />
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>{this.makeQuoteCards()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
