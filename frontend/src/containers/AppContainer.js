import React from 'react';
import App from '../App';


export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = (url = '/api/tasks/') => {
    fetch(url, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      this.setState({ tasks: data.results });
    })
    .catch(error => {
      console.log(error);
    });
  }

  addTask = (description) => {
    
    const data = {
      description: description
    };

    fetch('/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response.json());
      this.fetchTasks();
    })
    .catch(error => {
      console.log(error);
    });
  }

  removeTask = (task_id) => {
    
    fetch(`/api/tasks/${task_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      console.log(response);
      this.fetchTasks();
    })
    .catch(error => {
      console.log(error);
    });
  }

  toggleCompleted = (task_id, description, completed) => {
    
    const data = {
      completed: completed,
      description: description
    };

    fetch(`/api/tasks/${task_id}/`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response);
      this.fetchTasks();
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  render() {
    return (
      <App
        tasks={this.state.tasks}
        addTask={this.addTask}
        removeTask={this.removeTask}
        toggleCompleted={this.toggleCompleted}
      />
    );
  }
}
