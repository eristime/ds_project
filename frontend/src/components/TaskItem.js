import React from 'react';
import { 
  Button,
  ListGroupItem
} from 'reactstrap';


export default class TaskItem extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      completed: props.task.completed,
    }
  }

  toggle = () => {
    this.setState({
      completed: !this.state.completed
    })
  }

  render() {

    const { description, completed, priority} = this.props.task;
    return (
      <ListGroupItem>
        <div style={styles.item}>
        <input type="checkbox" checked={this.state.completed} onChange={this.toggle} />
          <p style={this.state.completed ? {textDecoration: 'line-through'} : null}>{description}</p>
          <p style={this.state.completed ? {textDecoration: 'line-through'} : null}>{priority}</p>
          <Button color="danger">Remove</Button>
        </div>
      </ListGroupItem>
    );
  }

}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}