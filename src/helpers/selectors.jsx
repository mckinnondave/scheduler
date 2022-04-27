// Selector Functions

// Appointments
export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(ele => ele.name === day);
  const dayAppointments = [];
  if(!filteredDay[0]) {
    return [];
  } else {
    const appointmentIds = filteredDay[0].appointments;
    for (const apptId of appointmentIds) {
      dayAppointments.push(state.appointments[apptId])
    }
  }
  return dayAppointments;
}

// Gets Interviews
export function getInterview(state, interview) {
  const interviewObject = {};
  if (!interview) {
    return null;
  } else {
    const interviewer = state.interviewers[interview.interviewer]
    interviewObject.student = interview.student;
    interviewObject.interviewer = interviewer
  }
  return interviewObject;
}

// Get Interviewers for a Day
export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(ele => ele.name === day);
  const interviewersArray = [];
  if(!filteredDay[0]) {
    return [];
  } else {
    const interviewerIds = filteredDay[0].interviewers;
    for (const intId of interviewerIds) {
      interviewersArray.push(state.interviewers[intId])
    }
  }
  return interviewersArray;
}