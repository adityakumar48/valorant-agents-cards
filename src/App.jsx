import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter basename="/">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
