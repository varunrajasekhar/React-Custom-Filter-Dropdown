import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      inputvalue: '',
      options: ['varun', 'raja', 'sekhar'],
      filteredOptions: [],
      showOptions: false
    };
  }

  inputFocus = () => {
this.setState({
      showOptions: true
    });
  }

  componentDidMount() {
    this.setState({
      filteredOptions: [...this.state.options]
    });

    document.addEventListener('click', (e) => {
       if(this.node && !this.node.contains(e.target)) {
         this.setState({showOptions: false});
       }
    })
  }

  filterOptions = () => {
    this.setState({filteredOptions: [...this.state.options.filter(e => e.includes(this.state.inputvalue))]})


  }

  inputKeypress = (e) => {
    this.setState({inputvalue: e.target.value}, () => {
      this.filterOptions();
    });
  
  }

  inputBlur = (e) => {
   
  }

  optionClick = (option) => {
    this.setState({inputvalue:option})
  }

  render() {
    return (
      <div>
      
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <div className="wrap" ref={node => this.node= node}>
        <input  onBlur={this.inputBlur} onFocus={this.inputFocus} onChange={this.inputKeypress} value={this.state.inputvalue}/>
        <ul style={{display: `${this.state.showOptions ? 'block' : 'none'}`}}>
          {this.state.filteredOptions && this.state.filteredOptions.map((option, oid) => {
            return (
              <li className="option" key={oid} onClick={() => this.optionClick(option)}>{option}</li>
            )
          })}
        </ul>
        </div>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
