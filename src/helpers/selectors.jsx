export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(ele => ele.name === day);
  const dayAppointments = [];
  // console.log("FILTERED", filteredDay[0]);
  if(!filteredDay[0]) {
    return [];
  } else {
    const appointmentIds = filteredDay[0].appointments;
    // console.log("appointmentIds", appointmentIds);
    for (const apptId of appointmentIds) {
      // console.log("APPT", apptId)
      dayAppointments.push(state.appointments[apptId])
    }
  }
  // console.log("APPOINTMENT", dayAppointments)
  return dayAppointments;
}

export function getInterview(state, interview) {
  const interviewObject = {};
  // console.log("INTERVIEW", interview);
  // console.log("INTERVIEWERS", state.interviewers);
  // console.log("KEY1", interview.interviewer);
  if (!interview) {
    return null;
  } else {
    const interviewer = state.interviewers[interview.interviewer]
    // console.log("INT", interviewer);
    interviewObject.student = interview.student;
    interviewObject.interviewer = interviewer
  }
  console.log("INTERVIEWobject", interviewObject);
  return interviewObject;
}