import React from 'react';
import './App.css';
import ComplexityToChurn from "./containers/ComplexityToChurn";
import Selector from "./containers/Selector";
import DataImport from "./containers/DataImport";

function App() {
    return (
    <>
        <div className="left-pane">
            <Selector />
        </div>
        <div className="right-pane">
            <DataImport />
            <ComplexityToChurn />
        </div>
    </>
  );
}

export default App;
