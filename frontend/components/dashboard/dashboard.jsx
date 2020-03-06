import React from 'react'
import { Link, Route } from 'react-router-dom';
import Header from '../util/header';
import ProjectIndex from './project_index';
import ProjectForm from './project_form';
import { handleChange } from '../../util/form_util';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    document.body.classList.toggle('dash', true);
  }

  componentWillUnmount() {
    document.body.classList.toggle('dash', false);
  }

  handleInput(e) {
    this.setState({searchText: e.target.value});
  }

  render() {
    return (
      <div className='dashboard'>
        <Header/>
        {this.renderHeading()}
        {this.renderIndex()}
      </div>
    );
  }

  renderHeading() {
    return (
      <div className='heading'>
        <h2>Projects</h2>
        <input type="text" className="searchbar" placeholder="Search Projects" onChange={this.handleInput} value={this.state.searchText}/>
        <Link className='button' to='/projects/new'>Create Project</Link>
      </div>
    );
  }

  renderIndex() {
    return(
      <div className='body'>
        <ProjectIndex searchText={this.state.searchText}/>
        <Route path='/projects/new' component={ProjectForm} />
        <Route path='/projects/edit/:id' component={ProjectForm} />
      </div>
    );
  }
}

export default Dashboard;
