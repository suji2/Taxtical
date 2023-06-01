import React from 'react';
import SignupForm from './components/Login/SignupForm';
import { useEffect } from "react";
import { fireStore } from "./components/DB/Firebase";

const App = () => {
    useEffect(() => {
      console.log(fireStore);
    });
  return (
    <div className="App">
      <SignupForm />
      <div className="App">{fireStore._databaseId.projectId}</div>
    </div>
  );
};

export default App;
