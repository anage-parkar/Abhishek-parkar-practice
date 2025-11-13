import React from 'react';
import './App.css';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <h1 className="hello-text">Hello, {name}!</h1>
  );
};

export default Hello;