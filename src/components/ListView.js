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
import { flexbox } from "@material-ui/system";
import Card from "@material-ui/core/Card";

import { fetchLists, showAddListModal } from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal";

const styles = theme => ({
  root: {
    width: "auto",
    backgroundColor: theme.palette.background.paper
  },
  card: {
    width: "280px",
    padding: "10px",
    margin: "5px"
  }
});

class ListView extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  onClickPlus(list) {
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
            <Card className={classes.card} key={index}>
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
            </Card>
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
