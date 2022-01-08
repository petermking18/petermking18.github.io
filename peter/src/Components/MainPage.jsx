import React from 'react';
import './MainPage.scss';
import Headshot from '../Headshot.jpg';
import ContactForm from './ContactForm';
import Card from 'react-bootstrap/Card';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactSubmitted: false,
            contactNeedsFields: false,
        }
    }

    contactSubmitted = () => {
        this.setState({contactSubmitted: true});
        this.setState({contactNeedsFields: false});
    }
    contactNeedsFields = () => {
        this.setState({contactNeedsFields: true});
    }

    render() {
        return <div id="mainpage">
            <div className="container py-5">
                <div className="row center-row fadeInLeft">
                    <img src={Headshot} alt="Headshot" id="Headshot" />
                    <div className="col">
                        <h1 className="theme-gradient font-weight-bold mb-0" id="Name">Peter King</h1>
                        <br />
                        <lead className="lead">Software Developer</lead>
                    </div>
                </div>
            </div>


            <div className="container fadeInRight pb-4" id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                        <h4 className="mb-0 ml-3 py-2 theme-gradient font-weight-bold">
                            About Me
                            {/* <button className="theme-gradient font-weight-bold font-size-larger btn btn-link accordion-button" data-toggle="collapse" data-target="#collapseOne">
                                About Me
                            </button> */}
                        </h4>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                            I'm a Computer Science student at Southern Methodist University in Dallas, TX.
                            I'm primarily focused on Software Development and have experience in C++, React JS, HTML, CSS,
                            Python, and more. Click the Projects tab below to see what I've been working on.
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                        <h4 className="mb-0 ml-3 py-2 theme-gradient font-weight-bold">Projects</h4>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-around">
                                <div className="pcardwrapper">
                                    <a className="pcard text-center reg-a pb-4" href='/'>
                                        <h4 className="mb-1 py-2">RateMyBar</h4>
                                        <h5 className="mb-2">
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">Node</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">React</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">MySQL</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">Express</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">Docker</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">NGINX</span>
                                        </h5>
                                        <p className="p-y-1 mb-1 py-2">
                                            A web app for rating and discovering bars in your area.
                                        </p>
                                        <a href="https://www.ratemybar.app" className="mt-2">Visit Website</a>
                                        <a href="https://apps.apple.com/US/app/id1595707496?mt=8" className="mt-2">App Store</a>
                                    </a>
                                </div>
                                <div className="pcardwrapper">
                                    <a className="pcard text-center reg-a" href="https://github.com/petermking18/VacationGram" target="_blank">
                                        <h4 className="mb-1">TravelGram</h4>
                                        <h5 className="mb-2">
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">React</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">HTML/CSS</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">Javascript</span>
                                            <span className="badge badge-pill theme-gradient-badge mx-1 my-1">SQL</span>
                                        </h5>
                                        <p className="p-y-1 mb-2">
                                            A simple vacation sharing social website to document and discover new
                                            trips around the globe.
                                            </p>
                                        <a href="https://github.com/petermking18/VacationGram" target="_blank">See on Github</a>
                                    </a>
                                </div>
                                <div className="pcardwrapper">
                                    <a className="pcard text-center reg-a" href="https://github.com/petermking18/Algorithm-Library" target="_blank">
                                        <h4 className="mb-1">Algorithm Library</h4>
                                        <h5 className="mb-1"><span className="badge badge-pill theme-gradient-badge">C++</span></h5>
                                        <p className="p-y-1 mb-1">
                                            A collection of sorting and searching algorithms, as well as a travelling salesman solver
                                            with naive, dynamic programming, and metaheuristic techniques.
                                        </p>
                                        <a href="https://github.com/petermking18/Algorithm-Library" target="_blank">See on GitHub</a>
                                    </a>
                                </div>
                                <div className="pcardwrapper">
                                    <a className="pcard text-center reg-a" href="https://github.com/petermking18/Data-Structures-Library" target="_blank">
                                    <h4 className="mb-1 py-2">Data Structures Library</h4>
                                        <h5 className="mb-1 py-2"><span className="badge badge-pill theme-gradient-badge">C++</span></h5>
                                        <p className="p-y-1 mb-1 py-2">
                                            Custom implementations of useful data structures.
                                        </p>
                                        <a href="https://github.com/petermking18/Data-Structures-Library" target="_blank" className="mt-2">See on GitHub</a>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                        <h4 className="mb-0 ml-3 py-2 theme-gradient font-weight-bold">Contact Me</h4>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            {this.state.contactNeedsFields && 
                            <p className="text-center">All fields required!</p>}
                            {!this.state.contactSubmitted &&
                            <ContactForm didSubmit={this.contactSubmitted} needFields={this.contactNeedsFields} />}
                            {this.state.contactSubmitted && 
                            <p className="text-center">Message sent!</p>}
                        </div>
                    </div>
                </div>


            </div>

        </div>//end return
    }
}