import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TestAnimation from "./components/timeline/TestAnimation";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Timeline */}
      <Timeline />

      {/* Widget */}
      <Widgets />

      {/* test */}
      <TestAnimation />
    </div>
  );
}

export default App;
