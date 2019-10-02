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
      // <Calendar
      //   localizer={localizer}
      //   defaultDate={new Date()}
      //   defaultView="month"
      //   events={this.state.events}
      //   style={{ height: "100vh" }}
      // />
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=ZHlsYW4uaGF2ZWxvY2tAZ21haWwuY29t&amp;src=bWVuc21jZ2lsbHJ1Z2J5QGdtYWlsLmNvbQ&amp;color=%237986CB&amp;color=%23F09300&amp;showNav=1&amp;showPrint=0&amp;showTz=0&amp;mode=WEEK&amp;title=Havelock"
        style={{
          borderWidth: "0",
          width: "100%",
          height: "600px",
          frameBorder: "0",
          scrolling: "no"
        }}
      ></iframe>
    );
  }
}

export default CalendarContainer;
