import React from 'react';

// function Projects() {
//   return (
//     <div className="">
//       My Projects
//       {this.props.test}
//     </div>
//   );
// }

class Projects extends React.Component {
    render(){
        return (
            <div className="">
                My Projects
                {this.props.test}
            </div>
        );
    }
}
export default Projects;
