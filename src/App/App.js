import React, { useState , useEffect } from "react";
import Projects from './Projects'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const params = {
      headers: {
        "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd",
      } 
    }
    const projectsFetch = fetch('https://app.paymoapp.com/api/projects', params)
    const tasklistsFetch = fetch('https://app.paymoapp.com/api/tasklists/',params)
    const tasksFetch = fetch('https://app.paymoapp.com/api/tasks/', params)

    Promise.all([projectsFetch, tasklistsFetch, tasksFetch])
      .then((data) => {
        const projectsResponse = data[0]
        const tasklistsResponse = data[1]
        const tasksResponse = data[2]
        return Promise.all([projectsResponse.json(), tasklistsResponse.json(), tasksResponse.json()])
      })
      .then((data) => {
        const projects = data[0].projects
        const tasklists = data[1].tasklists
        const tasks = data[2].tasks

        data = projects;

        data.forEach(project => {
          project.tasklists = tasklists.filter( tasklist => tasklist.project_id === project.id )
          project.tasklists.forEach( tasklist => {
            tasklist.tasks = tasks.filter( task => task.tasklist_id === tasklist.id )
          })
        })
        this.setState({
          data
        })
      })
  }

  render() {
      return <Projects data={this.state.data}/>
  }
}
export default App;
