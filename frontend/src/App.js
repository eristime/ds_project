import React from 'react';
import { 
  Button,
  ListGroup,
  Input
  } from 'reactstrap';
import TaskItem  from './components/TaskItem';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputDescription: 'Add a new task...'
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={{width: '600px'}}>
        <br />
        <h1>Tasks</h1>
        <br />
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>

          <Input 
            style={{width: 500}}
            placeholder="Add a new task..."
            onChange={(e) => {
                this.setState({inputDescription: e.target.value});
              }
            }
          />
          <Button 
            color="primary" 
            onClick={() => {
              this.props.addTask(this.state.inputDescription);
              this.setState({ inputDescription: 'Add a new task...'})
            }}
          >Add new</Button>
        </div>
        <br />
        <ListGroup>

          {this.props.tasks && this.props.tasks.map(task => {
            return (
              <TaskItem 
                task={task}
                key={task.task_id}
                addTask={this.props.addTask}
                removeTask={this.props.removeTask}
                toggleCompleted={this.props.toggleCompleted}
              />
            );
          })}

        </ListGroup>
        </div>
      </div>
    );
  }
}


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowItem : {
    flex: 1, 
    justifyContent: 'center'
  }

}
