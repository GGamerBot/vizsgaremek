import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewScreen from './components/ViewScreen';
import EditScreen from './components/EditScreen';
import ConnectionTable from './components/ConnectionTable';
 
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/view/:id" element={<ViewScreen />} />
          <Route path="/edit/:id" element={<EditScreen />} />
          <Route path="/connections/:gameId" element={<ConnectionTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
