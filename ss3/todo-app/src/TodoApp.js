import {Component} from "react";

export class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list : [],
            item : '',
        }
    }
    handleChange = (event) => {
        this.setState({item :event.target.value})
    }

    handleAddItem = () => {
        const { item, list } = this.state;
        if (item.trim()) {
            this.setState({
                list: [...list, item],
                item: ''
            });
        }
    }
    render() {
        return (
            <div style={{textAlign: 'center', marginTop: 50}}>
                <h1> todo List</h1>
                <input
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                    placeholder="Enter task"
                />
                <button onClick={this.handleAddItem}>Add</button>

                <ul style={{listStyleType: 'none', padding: 0}}>
                    {this.state.list.map((todo, index) => (
                        <li key={index} style={{marginTop: 10}}>
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}