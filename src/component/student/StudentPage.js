import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';
import AnnouncementList from '../announcements/AnnouncementList';

class StudentPage extends Component {
  render() {
    return(
      <div>
        <h1>Student Page</h1>
        <h1 style = {{textAlign:'center'}}>Announcements</h1>
        <AnnouncementList pageLength = {2} />
        <h1 style = {{textAlign:'center'}}>Active Projects</h1>
        <ProjectList />
      </div>
    );
  }
}

export default StudentPage;