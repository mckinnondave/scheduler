import React from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationdata";


export default function Application(props) {

  const {
    state, 
    setDay,
    bookInterview,
    deleteInterview
  } = useApplicationData()
  
  const interviews = getInterviewersForDay(state, state.day)

  const dayAppointments = getAppointmentsForDay(state, state.day).map(appointment => {
    const interview = getInterview(state, appointment.interview)
    return (
      <Appointment 
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interviews}
      bookInterview={bookInterview}
      deleteInterview={deleteInterview}
      />
    )
  })

  return (
    <main className="layout">

      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
        <nav className="sidebar__menu"></nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>

      <section className="schedule">
        {dayAppointments}
        <Appointment key="last" time="5pm" />
      </section>

    </main>
  );
}