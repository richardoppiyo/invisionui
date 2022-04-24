import './App.css';
import NameForm from './form';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineWindows } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="outerbox">
        <div className="left-div">
          <div className="upper">
              <p>
              Step 1 of 3 ...
            </p>
          </div>
          <div className="lower">
            <NameForm />
          </div>
        </div>
        <div className="right-div">
          <div className="right-upper-div">
            <h1>Dummy heading</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            </p>
          </div>
          <div className="right-lower-div">
            <AiOutlineSearch className="icon1" />
            <FiMessageSquare className="icon1"/>
            <VscCode className="icon1"/>
            <AiOutlineWindows className="icon1"/>
         </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
