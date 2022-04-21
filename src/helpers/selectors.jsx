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