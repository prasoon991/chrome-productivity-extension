import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartSection from "./components/ChartSection";

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/logs/all")
      .then((res) => setLogs(res.data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#14213d] flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white border-[6px] border-orange-500 rounded-xl shadow-2xl">
        <header className="bg-orange-500 text-white px-8 py-5 rounded-t-xl border-b-4 border-black shadow-md">
          <h1 className="text-4xl font-extrabold text-center uppercase tracking-wide">
            🔥 Time Tracker Dashboard
          </h1>
          <p className="text-center text-sm mt-1 text-orange-100">
            Track your time and boost productivity like a pro!
          </p>
        </header>

        <main className="p-6 bg-orange-50 rounded-b-xl">
          <ChartSection logs={logs} />
        </main>
      </div>
    </div>
  );
}

export default App;
