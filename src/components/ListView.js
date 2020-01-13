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
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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
    const { lists, classes } = this.props;
    const cardWidth =
      this.state.width <= 600
        ? this.state.width
        : (this.state.width - 33 * lists.length) / lists.length;

    const cardStyle =
    this.state.width <= 600
        ? { width: `92%`, textAlign: 'center' }
        : { minWidth: "180px", maxWidth: `${cardWidth}px` };

    console.log(cardWidth);

    return (
      <div>
        <NewListForm />
        <Box display={{ xs: "inline", sm: "flex" }} flexDirection="row">
          {lists.map((list, index) => {
            return (
              <Box key={index}>
                <Card
                  className={classes.card}
                  key={index}
                  style={cardStyle}
                >
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
              </Box>
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
