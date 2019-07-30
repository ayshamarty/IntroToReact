
import React from 'react';
import { Button } from 'reactstrap';

import './App.css';
import FilterList from './components/FilterList'

function App() {
  return (
    <div className="App">
      <div>
        <Button color="success" outline={true} disabled={true}>Success</Button>
        <FilterList />
      </div>

    </div>
  );
}

export default App;