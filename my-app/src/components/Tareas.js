import React, { Component } from 'react';
import { todos } from '../todos.json';



class Tareas extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state={
            showForm: false,
            todos
        }
    }

    removeTodo(index){
        console.log(index);
        if(window.confirm('Are you sure you want to delete it?')){
            this.setState({
                todos:this.state.todos.filter((todo,i)=> {
                    return i!==index
                })
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(document.getElementById("title").value);
        console.log(document.getElementById("prioridad").value);
        console.log(document.getElementById("descripcion").value);
        console.log(document.getElementById("responsable").value);

        this.state.todos.push(
            {  
                "title": document.getElementById("title").value,
                "responsable": document.getElementById("responsable").value,
                "descripcion": document.getElementById("descripcion").value,
                "priority": document.getElementById("prioridad").value
            }
        );
    
        this.setState({
            todos:this.state.todos
        })




    }


    showForm = () => {
        console.log("Creando tarjeta");
        return (
            <div className="card" >
                    <div className="modal-content">
                        <div className="card-header bg-dark">

                            <h4 className="card-title bg-dark">Nueva Tarea</h4>
                        </div>

                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>

                                <label htmlFor="title" className="text-dark" ref={this.titulo}>Nombre de la Tarea : </label>
                                <input  id="title" className="text-dark" type="text" name='nombre'/>

                                <label className="text-dark">  Prioridad: </label>

                                <select id="prioridad" className="text-dark" name="prioridad">
                                    <option name="low">low</option>
                                    <option name="medium">medium</option>
                                    <option name="high">high</option>
                                </select>

                                <label  className="text-dark"> Descripcion : </label>
                                <input  id="descripcion" className="text-dark" type="text" name='description'/>

                                <label  className="text-dark"> Responsable : </label>
                                <input  id="responsable" className="text-dark" type="text" name='responsable'/>
                                
                                &nbsp;&nbsp;&nbsp;
                                <button className = "btn btn-lg btn-success align-content-center" name="Submit" >Create</button>

                            </form>
                        </div>

                        <div className="card-footer">
                                <button className="btn btn-block btn-danger align-content-center" onClick={() => this.setState({showForm: false}) } >Close Panel</button>
                        </div>
                    </div>
                </div>
        );
    }


    render(){
        console.log(this.state.todos);

        const todos = this.state.todos.map((todo,i) => {
        return(
                <div className = "col-md-4">
                    <div className = "card mt-4">
                        <div className = "class-header">
                            <h3 className="text-light bg-dark" >{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-1"> <p className="text-dark">{todo.priority} </p></span>
                        </div>
                        <div className= "card-body border">
                            <p className="text-dark ">{todo.descripcion}</p>
                            <p className="text-dark"><mark>{todo.responsable}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}> Delete</button>
                        </div>
                    </div>
                </div>





        )
        })
        return(
            <div className="container">
                <div className="row mt-4">
                    {todos}
                    <div className = "card mt-4 bg-dark ">
                        <button className="btn-group-lg btn-light btn-outline-primary" onClick={() => this.setState({showForm: true}) }> Nueva Tarea</button>
                        {this.state.showForm ? this.showForm() : null}
                    </div>

                </div>
            </div>
        )
        
    }
}
    
export default Tareas;