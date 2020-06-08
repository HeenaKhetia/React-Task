import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'

export class Home extends Component {
    render() {
        return (
            <div className="container flex-container">
                <div>
                    <NavLink className="cardlink" to="/movies">
                        <div className="moviecard">
                            <b className="white-txt">MOVIES</b>
                        </div>
                        <span className="cardtitle">Popular Movies</span>
                    </NavLink>
                </div>
                <div>
                    <NavLink  className="cardlink" to="/series">
                        <div className="moviecard">
                            <b className=" white-txt">SERIES</b>
                        </div>
                        <span className="cardtitle">Popular Series</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Home
