import { useState } from 'react'
import React from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

// function MyComponent() {
//   // Using the useState hook to manage state in a functional component
//   const [count, setCount] = useState(0);

//   // Function to increment the count when the button is clicked
//   const incrementCount = () => {
//     // Updating the count state using the setCount function
//     setCount(count + 1);
//   };

//   // Rendering the component with the current count and an "Increment" button
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }


class MyComponent extends React.Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Method to increment the count when the button is clicked
  incrementCount = () => {
    // Updating the count state using this.setState
    this.setState({ count: this.state.count + 1 });
  }

  // Render method to display the current count and the "Increment" button
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default App
