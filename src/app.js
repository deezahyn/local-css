import React from 'react'
import ViewCheckout from './components/view-checkout/view-checkout'

class MyComponent {
  render() {
    return (
      <div>
        <p>Hello World { this.props.hello }</p>
        <ViewCheckout />
      </div>
    )
  }
}

React.render(<MyComponent hello='something' />, document.getElementById('app'))