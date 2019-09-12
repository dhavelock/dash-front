import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarContainer extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        style={{ height: "100vh" }}
      />
    );
  }
}

export default CalendarContainer;
