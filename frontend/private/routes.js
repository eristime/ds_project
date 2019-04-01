const axios = require('axios');

module.exports = (app, serverAddress) => {

  app.delete('/api/tasks/:taskID/', function (req, res) {
    
    const taskId = req.params.taskID;

    axios.delete(`${serverAddress}/api/tasks/${taskId}/`)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error.toString());
    });
  
  });

  app.put('/api/tasks/:taskID/', function (req, res) {
    
    const data = {
      description: req.body.description,
      completed: req.body.completed
    }
    const taskId = req.params.taskID;
    //console.log(data);
    axios.put(`${serverAddress}/api/tasks/${taskId}/`, data)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error.toString());
    });
  
  });
  
  app.get('/api/tasks/', function (req, res) {

    axios.get(serverAddress + '/api/tasks/')
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error.toString());
    });

  });


  app.post('/api/tasks/', function (req, res) {
    const data = {
      description: req.body.description,
      priority: req.body.priority
    }

    axios.post(serverAddress + '/api/tasks/', data)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error.toString());
    });

  });



};