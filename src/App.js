import React, {Component} from 'react';
import {makeHtml} from './showdown';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
      html: '',
    };

    this.updateHTML = event => this.setState({html: event.target.value});
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    const {value} = event.target;
    this.setState({
      markdown: value,
      html: makeHtml(value),
    });
  }

  render() {
    const {markdown, html} = this.state;
    return (
      <div className="app">
        <header className="header">
          <h1>MD2HTML</h1>
        </header>
        <div className="body">
          <div className="markdown-container">
            <div class="markdown-header">
              <h2>Markdown</h2>
            </div>
            <div>
              <textarea
                rows="50"
                value={markdown}
                className="textarea markdown-area"
                placeholder="write something great markdown!!"
                onChange={this.updateMarkdown}
                required
              />
            </div>
          </div>
          <div className="arrow-container">
            <div className="arrow" />
          </div>
          <div className="html-container">
            <div>
              <h2>HTML</h2>
            </div>
            <div>
              <textarea
                rows="50"
                value={html}
                className="textarea html-area"
                placeholder="output converted html with a genius algorithm"
                onChange={this.updateHTML}
                required
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
