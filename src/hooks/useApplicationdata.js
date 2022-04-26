import { useState, useEffect} from "react"
import axios from "axios"

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []) 

  const setDay = day => setState({...state, day})

  function updateSpots(state) {
    let newDays = [];
    for (const day of state.days) {
      let count = 0;
      for (const apptId of day.appointments) {
        if (state.appointments[apptId].interview === null) {
          count++;
        }
      }
      const updatedDay = { ...day, spots: count };
      newDays.push(updatedDay);
    }
    const newState = {
      ...state,
      days: newDays,
    };
    return newState;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };  
    return axios.put(`/api/appointments/${id}`, {interview}).then(()=> {
      const newState = {
        ...state,
        appointments
      }
      const updatedState = updateSpots(newState)
      setState(updatedState)
    })
  }

  function deleteInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const newState = {
          ...state,
          appointments
        }
        const updatedState = updateSpots(newState)
        setState(updatedState)    
      })
  }

  return { state, setDay, bookInterview, deleteInterview }
}