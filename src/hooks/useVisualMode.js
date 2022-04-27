import { useState } from "react"

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial])
  const mode = history[history.length-1]

  // Allows for transitions between modes
  function transition(newMode, replace = false) {
    const newHistory = [...history]
    if (replace) {
      newHistory.pop();
    }
    setHistory([...newHistory, newMode])
  };

  // Used by cancel buttons to return to empty state
  function back() {
    if (history.length <= 1) {
      return;
    }
    const newHistory = [...history]
    newHistory.pop();
    setHistory(newHistory)
  };

  return { mode, transition, back }
}