import React from "react";
import Tasklist from "./Tasklist";

export default class Projects extends React.Component {
	render() {
	  const projectsList = this.props.data.map( project => {
		return <ul key={project.id}>
			{project.name}
			<ul>
				{
					project.tasklists.map( 
						tasklist => <Tasklist key={tasklist.id} data={tasklist} />
					)
				}
			</ul>
		</ul>
	  })
	  return <ul>{projectsList}</ul>
	}
}