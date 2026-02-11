import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Stats from "./components/stats/stats";
import Student from "./components/student/student";

function App() {
  const [stats, setStats] = useState({
    total: 0,
    online: 0,
    honrol: 0,
    averge: 0,
  });

  return (
    <>
      <Header
        text="Student Dashboard"
        textp="A React exercise demonstrating: Props, Children, Iteration, and Conditional Rendering"
      />
      <Stats stats={stats} />
      <Student />
    </>
  );
}

export default App;
