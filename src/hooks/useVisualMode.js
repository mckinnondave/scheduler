import { useState } from "react"

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial])
  const mode = history[history.length-1]

  function transition(newMode, replace = false) {
    const newHistory = [...history]
    if (replace) {
      newHistory.pop();
    }
    setHistory([...newHistory, newMode])
  };

  function back() {
    if (history.length <= 1) {
      return;
    }
    // Create copy of history, remove end, set history to all but last element
    const newHistory = [...history]
    newHistory.pop();
    setHistory(newHistory)
  };

  return { mode, transition, back }
}