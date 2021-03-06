import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const interviewerList = interviewers.map(({ id, name, avatar }) => (
    <InterviewerListItem
      key={id}
      id={id}
      name={name}
      avatar={avatar}
      selected={id === value}
      setInterviewer={() => onChange(id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
