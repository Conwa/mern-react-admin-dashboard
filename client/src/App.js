import { useSelector } from "react-redux";

// console.log(React);

function App() {
  const mode = useSelector((state) => state.global.mode);
  return <div className="app"></div>;
}

export default App;
