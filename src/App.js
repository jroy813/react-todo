import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
            },
            {
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
            },
            {
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
            },
            {
            "id": 4,
            "title": "et porro tempora",
            "completed": true
            },
        ]
    }
    
    markComplete = (id) => {
        console.log(id);
        this.setState( { todos: this.state.todos.map(todo => {
            if( todo.id === id ) {
                todo.completed = !todo.completed
            }
            return todo;
        }) } );
    }
    
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
    
    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
  
    render() {
        const baseName = process.env.NODE_ENV === 'production' ? '/react/todo/' : '/';
        
        return (
            <Router basename={baseName}>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}
 
export default App;