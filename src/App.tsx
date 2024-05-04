import React from 'react';
import { AppRender } from './routes/routes.render';
import AuthProvider from '@components/Auth/auth.provider';

function App() {
  console.log(123);
  return (
    <div className="App">
        <AppRender/>
    </div>
  );
}

export default App;
