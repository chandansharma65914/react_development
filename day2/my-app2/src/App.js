import logo from './logo.svg';
import './App.css';

import Button  from './components/Button';
import Avatar from './components/Avatar';
function App() {
  return (
    <div className="App">
     
      <Button text="click      me" buttonColor="red" />

      <Avatar  src="https://avatars.githubusercontent.com/u/109021997?v=4" name="chandan sharma"/>
    </div>

   
  );
}

export default App;
