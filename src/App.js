import "./App.css";
import AllPads from "./components/AllPads";
import woman from "./woman.jpg";

function App() {
  return (
    <>
      <header>
        <h1 className="mainHeader">Groveo</h1>
        <h2 className="secondHeader">Let's Move With The Groove!</h2>
      </header>
      <div className="mainContainer">
        <AllPads />
        <img className="womanImg" src={woman} alt="woman listening to music" />
      </div>
      <footer>
        <h3 className="madeWith">Made With &hearts; By Sapir Abutbul</h3>
        <div>
          Icons made by{" "}
          <a
            target="blanck"
            href="https://www.flaticon.com/authors/those-icons"
            title="Those Icons"
          >
            Those Icons
          </a>{" "}
          from{" "}
          <a target="blanck" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
