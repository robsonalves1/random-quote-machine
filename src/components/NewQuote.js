import { Component } from "react";

export default class NewQuote extends Component {
    render() {
        return (
            <div id='new-quote'>
                <a
                    id='tweet-quote'
                    className="btn-tweet"
                    style={this.props.styles}
                    href={'https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="' + this.props.quoteAndAuthor[0].replace(/\s/g, "%20") + '%20' + this.props.quoteAndAuthor[1].replace(/\s/g, "%20")}
                    target='_blank'>
                    <i class='fa fa-twitter btn-twitter'></i>
                </a>
                <button
                    onClick={this.props.btnChangeQuote}
                    id='btn-change-quote'
                    style={this.props.styles}>
                    Change Quote
                </button>
            </div>
        )
    }
}