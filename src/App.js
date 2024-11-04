import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
    
      <Navbar title="TextUtils" aboutText="Contact" />
      <div className="container my-3  ">
        <TextForm heading="Enter The text to analyze" />
      </div>
    </>
  );
}

export default App;
