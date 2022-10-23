import React from 'react';
import { Outlet } from 'react-router-dom';

class MainContent extends React.Component {
  render() {
    return (
      <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}>
      
      </section>
    )
  }
}
export default  MainContent;

