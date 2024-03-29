import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './views/dashboard/index.tsx';
import GraphEditorPage from './views/graph-editor/index.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='' element={<GraphEditorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
