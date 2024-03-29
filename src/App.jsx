import Navbar from "./composants/Navbar";
import Note from "./composants/Note";

function App() {
  return (
    <>
      <Navbar />
      <div className="note-container">
        <Note />
      </div>
    </>
  );
}

export default App;
