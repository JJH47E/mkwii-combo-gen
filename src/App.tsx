import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Generator from './Components/Generator/generator.component';
import Home from './Components/Home/home.component';
import Layout from './Components/Layout/layout.component';
import Summary from './Components/Summary/summary.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mkwii-combo-gen/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mkwii-combo-gen/generate" element={<Generator playerCount={1}/>} />
          <Route path="/mkwii-combo-gen/summary" element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
