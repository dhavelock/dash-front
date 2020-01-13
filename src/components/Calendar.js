import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCalendarUrl } from "../actions/account";

import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarContainer extends Component {
  componentDidMount() {
    this.props.fetchCalendarUrl();
  }

  render() {
    const url = this.props.calendarUrl;
    return (
      <div>
        {url == null || url === "" ? (
          <div></div>
        ) : (
          <iframe
            title="calendar"
            src={url}
            style={{
              borderWidth: "0",
              width: "100%",
              height: "600px",
              frameBorder: "0",
              scrolling: "no"
            }}
          ></iframe>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    calendarUrl: state.account.calendarUrl
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCalendarUrl }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
