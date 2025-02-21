import { Routes, Route, BrowserRouter } from "react-router-dom";
import AxiosCall from "./basicapicall/axioscall";
import Apicall from"./basicapicall/apicall";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apicall />} />
      <Route path="/apicall" element={<Apicall />} />
      <Route path="/axioscall" element={<AxiosCall />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;

