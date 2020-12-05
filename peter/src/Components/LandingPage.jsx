import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showContinueError: false,
        }
    }

    render() {
        return <div id="landingpage">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Link to="/">
                    <button type="button" className="btn" id="continueButton" onClick={e => this.setState({ showContinueError: true })}>Continue</button>
                </Link>
                {this.state.showContinueError &&
                    <div id="ContinueError">
                        <p>There's nothing else here yet... sorry</p>
                        <button type="button" className="btn" id="closeContinueErrorButton" onClick={e => this.setState({ showContinueError: false })}>Ok :(</button>
                    </div>
                }
            </div>
        </div>
    }
}