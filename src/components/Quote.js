import { Component } from "react";

export default class Text extends Component {
    render() {
        return (
            <div style={this.props.color}>
                <h1 id='text'>{this.props.quoteAndAuthor[0]}</h1>
                <p id='author'>{this.props.quoteAndAuthor[1]}</p>
            </div>
        )
    }
}