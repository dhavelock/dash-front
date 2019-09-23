import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";

import { fetchLists, showAddListModal } from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal";

const styles = theme => ({
  root: {
    width: "250px",
    backgroundColor: theme.palette.background.paper
  }
});

class ListView extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  onClickPlus(list) {
    console.log('onClickPlus', list)
    this.props.showAddListModal(list);
  }

  render() {
    if (this.props.lists.length === 0) {
      return <div />;
    }

    const { lists, classes } = this.props;

    return (
      <Box display="flex" flexDirection="row">
        {lists.map((list, index) => {
          return (
            <Box key={index}>
              <div>
                <AddListModal key={index} list={list.id} />
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Typography style={{ paddingLeft: "5px" }}>
                    {list.name}
                  </Typography>
                  <div>
                    <IconButton
                      size="medium"
                      onClick={() => this.onClickPlus(list.id)}
                    >
                      <Icon size="medium">add</Icon>
                    </IconButton>
                  </div>
                </Grid>
              </div>
              <List className={classes.root}>
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

ListView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListView)
);
