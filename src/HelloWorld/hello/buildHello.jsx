import React from 'react';

export function buildHello(deps) {

  class Hello extends React.Component {
    constructor(props) {
      super(props);

      this.helloService = deps.helloService;

      this.state = {
        name: props.name
      }
    }

    onNameChange(event) {
      this.helloService.updateName(event)
        .then(name => {
          this.setState(Object.assign(this.state, {
            name: name
          }));
        });
    }

    render() {
      return(
        <div>
          <h1><span ref="greeting">Hello {this.state.name}</span></h1>
          <input
            type="text"
            ref="inputName"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
        </div>
      );
    }
  }

  return Hello
}
