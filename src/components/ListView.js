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
import Card from "@material-ui/core/Card";

import { fetchLists, showAddListModal, deleteTodoList } from "../actions/todo";

import TodoItem from "./TodoItem";
import AddListModal from "./modals/AddListModal";
import NewListForm from "./NewListForm";

const styles = theme => ({
  root: {
    width: "auto",
    backgroundColor: theme.palette.background.default
  },
  card: {
    width: "280px",
    padding: "10px",
    margin: "5px",
    backgroundColor: theme.palette.background.default
  }
});

class ListView extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  onClickPlus(list) {
    this.props.showAddListModal(list);
  }

  onClickClear(list) {
    this.props.deleteTodoList(list);
  }

  onClickAddNewList() {
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    // if (this.props.lists.length === 0) {
    //   return <div />;
    // }

    const { lists, classes } = this.props;

    return (
      <div>
        <NewListForm />
        <Box display="flex" flexDirection="row">
          {lists.map((list, index) => {
            return (
                <Card style={{display: 'block'}} className={classes.card} key={index}>
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
                            size="small"
                            onClick={() => this.onClickPlus(list.id)}
                          >
                            <Icon size="small">add</Icon>
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => this.onClickClear(list.id)}
                          >
                            <Icon size="small">clear</Icon>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.todo.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchLists, showAddListModal, deleteTodoList },
    dispatch
  );
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(ListView)
);
