import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <form>
          <input className="input" type="email" placeholder="Username" />
          <input className="input" type="password" placeholder="Password" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
