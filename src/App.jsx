import React from 'react';
import DynamicTextBoxes from './DynamicTextBoxes';
import TaskManager from './TaskManager';
import './App.css'; // Import your stylesheet for styling

function App() {
  return (
    <div className="app-container">
      {/* <h1>React Tasks in Internet Programming Lab by Abdullah Ibne Hanif Arean (FH-12)</h1> */}
      <div className="left-page">
        <h1>Task 1</h1>
        <DynamicTextBoxes />
      </div>
      <div className="right-page">
        <h1>Task 2</h1>
        <TaskManager />
      </div>
    </div>
  );
}

export default App;
