import React from 'react';
import App from '../App';

//const domain = 'http://backend:80';
//const domain = 'http://192.168.99.100:80';
const domain = '';

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

  fetchTasks = (url = domain + '/api/tasks/') => {
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

    fetch(domain + '/api/tasks/', {
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
    
    fetch(`${domain}/api/tasks/${task_id}`, {
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

    fetch(`${domain}/api/tasks/${task_id}/`, {
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
