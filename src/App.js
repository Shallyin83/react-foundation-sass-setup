import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
// import Foundation from './common/assets/js/foundation';
// console.log(Foundation);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Foundation POC</h1>
        <ul className="accordion" data-accordion>
          <li className="accordion-item is-active" data-accordion-item>
            
            <a href="#" className="accordion-title">Accordion 1</a>
        
            
            <div className="accordion-content" data-tab-content>
              <p>Panel 1. Lorem ipsum dolor</p>
              <a href="#">Nowhere to Go</a>
            </div>
          </li>
          <li className="accordion-item is-active" data-accordion-item>
            
            <a href="#" className="accordion-title">Accordion 2</a>
        
            
            <div className="accordion-content" data-tab-content>
              <p>Panel 2. Lorem ipsum dolor</p>
              <form>
              <div className="row">
                <div className="small-8">
                  <div className="row">
                    <div className="small-3 columns">
                      <label className="right">Label</label>
                    </div>
                    <div className="small-9 columns">
                      <input type="text" id="right-label" placeholder="Inline Text Input" />
                      <button className="success button">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            </div>
          </li>
        </ul>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          
        </p> */}
        
      </div>
    );
  }
}

export default App;
