import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import JavaScriptXML from './JavaScriptXML';
import Greeting from './Greeting';
import WelcomeMessage from './WelcomeMessage';
import UserCard from './UserCard';
import Counter from './Counter';

function App() {
  let name = "Mansi"
  let age = 22
  let location = "Ahemdabad"
  return (
    <div className="App">
      <Intro />
      {/* <JavaScriptXML /> */}
      {/* <Greeting name={name} age={age} /> */}
      {/* <WelcomeMessage /> */}
      {/* <UserCard name={name} age={age} location={location} /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
