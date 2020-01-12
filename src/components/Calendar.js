import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCalendarUrl } from "../actions/account";

import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarContainer extends Component {
  componentDidMount() {
    console.log("did mount", this.props);
    this.props.fetchCalendarUrl();
  }

  render() {
    console.log("url", this.props.calendarUrl);
    const url = this.props.calendarUrl;
    return (
      <div>
        {url == null || url == "" ? (
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
  console.log("state", state);
  return {
    calendarUrl: state.account.calendarUrl
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCalendarUrl }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
