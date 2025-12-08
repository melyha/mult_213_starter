import "./App.css";
import { useState } from "react";
import viteLogo from "/vite.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";
import { Card } from "./card";
import reactLogo from "./assets/react.svg";

function App() {
  // Sample data for demonstration
  const sampleTodos = [
    { id: 1, text: "Complete React assignment", completed: false },
    { id: 2, text: "Study for math test", completed: false },
    { id: 3, text: "Do laundry", completed: true },
  ];

  return (
    <div className="app">
      <Header
        title="Welcome to my app: TaskFlow Pro"
        message="Thanks for visiting my app."
      />

      <main className="main-content">

        <section className="todos-section">
          <h2>My Todo List</h2>
          <TodoList todos={sampleTodos} />
        </section>

         <section className="card-section">
          <h2>Featured Card</h2>
          <Card 
            title="My Card Title" 
            subtitle="My Card Subtitle" 
            content="This is the content of my card." 
            image="https://example.com/my-image.jpg" 
          />
        </section>
        
      </main>

      <footer>
        <Footer message="Contact me at contact@melxcreative.com" />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
