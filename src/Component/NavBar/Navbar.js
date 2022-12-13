import React, { Component } from "react";
import "./NavBar.css"
import image from "../Images/empay.png"
import { Link } from "react-router-dom";
import NavService from "../../Service/NavService";



class NavBar extends Component {
    state = {
        data: []
    }
    menuList = () => {
        return (this.state.data.map(({ title, page }, index) => {
            return (
                <li key={index}>
                    <Link to={`${page}`}>{title}</Link>
                </li>
            )
        }))
    }

    componentDidMount() {
        this.props.data.then((data) => {
            this.setState({ data });
        });
    }
    render() {

        return (
            <nav>
                <div className="logo">
                    <img src={image} alt="logo" />
                </div>
                <div>

                    <ul className="menu-list">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        {this.menuList()}
                    </ul>
                </div>


            </nav>
        )
    }
}

export default NavBar;