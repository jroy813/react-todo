import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => this.setState({ title: e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text" 
                name="title" 
                style={{ flex: '10', padding: 10 }}
                placeholder="Add Todo ..." 
                value={this.state.value}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="submit"
                className="btn"
                style={{ flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
