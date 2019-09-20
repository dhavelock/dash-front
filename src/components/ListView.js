import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";

import { fetchLists, showAddListModal } from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal";

const styles = {
  title: {
    width: "250px",
    backgroundColor: "#F5F5F5",
    color: "#212121",
    padding: "1px"
  },
  root: {
    width: "100%",
    backgroundColor: "#F5F5F5"
  }
};

class ListView extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  onClickPlus() {
    this.props.showAddListModal();
  }

  render() {
    if (this.props.lists.length === 0) {
      return <div />;
    }

    const { lists } = this.props;

    return (
      <Box display="flex" flexDirection="row">
        {lists.map((list, index) => {
          return (
            <Box style={styles.title} key={index}>
              <div>
                <AddListModal list={index} />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography style={{ paddingLeft: "5px"}}>{list.name}</Typography>
                  <div>
                    <IconButton
                      size="medium"
                      onClick={this.onClickPlus.bind(this)}
                    >
                      <Icon size="medium">add</Icon>
                    </IconButton>
                  </div>
                </Grid>
              </div>
              <List style={styles.root}>
                {list.items.map((item, index) => {
                  return <TodoItem item={item} key={index} />;
                })}
              </List>
            </Box>
          );
        })}
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.todo.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLists, showAddListModal }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
