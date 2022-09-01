import './App.scss';
import React from 'react';
import quotes from './data/quotes.json'
import NewQuote from './components/NewQuote';
import Quote from './components/Quote'



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: quotes.quote[this.getIdx()][1],
      author: quotes.author[this.getIdx()][1],
      color: 'blue'
    }

    this.setQuoteAndAuthor = this.setQuoteAndAuthor.bind(this);
    this.getIdx = this.getIdx.bind(this);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  getIdx() {
    let idx = Math.floor(Math.random() * quotes.quote.length);
    return idx;
  }

  setRandomColor() {
    const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    let idx = Math.floor(Math.random() * colorArray.length);

    this.setState({
      color: colorArray[idx]
    });
  }

  setQuoteAndAuthor() {
    let idx = Math.floor(Math.random() * quotes.quote.length);

    this.setState({
      quote: quotes.quote[this.getIdx()][1],
      author: quotes.author[this.getIdx()][1]
    })

    this.setRandomColor();
  }



  render() {
    let q = this.state.quote;
    let a = this.state.author;

    document.body.style = 'background-color: ' + this.state.color;

    return (
      <div id='quote-box' style={{ color: this.state.color }}>
        <Quote quoteAndAuthor={[q, a]} />
        <NewQuote
          btnChangeQuote={this.setQuoteAndAuthor}
          styles={{ backgroundColor: this.state.color }}
          quoteAndAuthor={[q, a]} />

      </div>
    )
  }
}


export default App;
