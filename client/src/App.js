/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.global.mode);
  return <div className="app"></div>;
}

export default App;
