import React, { Component } from 'react'
import axios from 'axios';
import './Content.scss'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: [],
            error: false
        }
    }

    GetSortOrder = (prop) => {  
        return function(a, b) {  
            if (a[prop] > b[prop]) {  
                return 1;  
            } else if (a[prop] < b[prop]) {  
                return -1;  
            }  
            return 0;  
        }  
    }  

    componentDidMount() {
        const params = this.props.match.params.content
        axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then((response) => {
                const result = response.data.entries.sort(this.GetSortOrder("title"));
                this.setState({
                    content: result.filter(entry => {
                        if ((params === 'series') && (entry['programType'] === 'series') && (entry['releaseYear'] >= 2010)) {
                            return entry;
                        } else if ((params === 'movies') && (entry['programType'] === 'movie') && (entry['releaseYear'] >= 2010)) {
                            return entry;
                        } else if((params !== 'movies') && (params !== 'series')) {
                            this.setState({
                                error: true
                            })
                        }
                    })
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            })
    }
    render() {
        return (
            <div className="container flex-container flex-space-around flex-wrap">
                {this.state.error ? 
                    <h6>Oops!!! Something Went Wrong...</h6> :
                    (this.state.content.length === 0) ?
                        <h6>Loading...</h6> :
                        this.state.content.map((value,index) => {
                            if(index < 21) {
                            return <div key={index} className="card">
                            <img src={value.images["Poster Art"].url} className="card-img-top" alt="img" />
                            <div className="card-body">
                            <h6 className="card-title">{value.title}</h6>
                            </div>
                        </div>
                            }
                        })
                    }
            </div>
        )
    }
}

export default Content
