import Navbar from "./composants/Navbar";
import Note from "./composants/Note";

function App() {
  return (
    <>
      <Navbar />
      <div className="note-container">
        <Note />
        <Note />
      </div>
    </>
  );
}

export default App;
