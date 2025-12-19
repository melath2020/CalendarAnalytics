import { useState } from 'react';
import './App.css';
import CalendarView from './components/CalendarView';
import DataModal from './components/DataModel.jsx';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className='App'>
      <h1>Calendar View</h1>
      <CalendarView openModal={() => setModalOpen(true)} />
      <DataModal isOpen={isModalOpen} closeModal={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
