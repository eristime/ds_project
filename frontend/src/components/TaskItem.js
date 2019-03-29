import React from 'react';
import { 
  Button,
  ListGroupItem
} from 'reactstrap';


export default class TaskItem extends React.Component {

  onCheckboxChange = () => {
    this.props.toggleCompleted(
      this.props.task.task_id,
      this.props.task.description,
      !this.props.task.completed
    );
  }

  onRemoveButtonPress = () => {
    this.props.removeTask(this.props.task.task_id);
  }

  render() {

    const { description, completed } = this.props.task;
    return (
      <ListGroupItem>
        <div style={styles.item}>
        <input type="checkbox" checked={completed} onChange={this.onCheckboxChange} />
          <p style={completed ? styles.descriptionCompleted : styles.description}>{description}</p>
          <Button
            outline
            size="small"
            color="danger"
            onClick={this.onRemoveButtonPress}
          >
            Remove
          </Button>
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
  },
  description: {
    width: '400px'
  },
  descriptionCompleted: {
    width: '400px',
    textDecoration: 'line-through'
  }
}