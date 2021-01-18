import React, { Component } from 'react'

class Navigation extends Component{



    render(){
        return(
            <nav className="navbar">
                <div className="card-dark">

                    <a href="/" className="text-muted text-decoration-none">
                    <h1>

                        {this.props.title}
                    </h1>
                    </a>
                    <span className="badge badge-pill badge-light ml-2 text-muted">
                        <p className="text-warning" >No. Tareas. {this.props.ntareas}</p>
                    </span>
                </div>
            </nav>

        );
    }
}
    
export default Navigation;