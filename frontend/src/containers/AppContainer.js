import React from 'react';
import App from '../App';

const domain = 'http://127.0.0.1:8000/';

const tasks = [
  {
    task_id: 1,
    description: 'Description 1',
    priority: 1,
    completed: false
  },
  {
    task_id: 2,
    description: 'Description 2',
    priority: 1,
    completed: false
  },
  {
    task_id: 3,
    description: 'Description 3',
    priority: 1,
    completed: false
  }
]

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.fetchTasks(domain + 'api/tasks');

  }

  fetchTasks = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        this.setState({ tasks: data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error.toString() });
      });
  }

  addTask = (description) => {
    
    const data = {
      description: description
    };

    fetch(domain + 'api/tasks', {
      method: 'POST',
      mode: "cors",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response.json());
      this.fetchTasks(domain + 'api/tasks');
    })
    .catch(error => {
      console.log(error);
      this.setState({ error: error.toString() });
    });
  }
  
  render() {
    return (
      <App
        tasks={tasks}
        addTask={this.addTask}
      />
    );
  }
}
