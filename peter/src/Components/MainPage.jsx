import React from 'react';
import './MainPage.scss';
import Headshot from '../Headshot.jpg';
import { Carousel } from './Carousel';
import ContactForm from './ContactForm';

export default class MainPage extends React.Component {
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
                            I am primarily focused on Software Engineering but have other interests as well...
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                        <h4 className="mb-0 ml-3 py-2 theme-gradient font-weight-bold">
                            Projects
                            {/* <button className="theme-gradient font-weight-bold btn btn-link accordion-button" data-toggle="collapse" data-target="#collapseTwo">
                                Projects
                            </button> */}
                        </h4>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            <div className="row hidden-md-up">
                                <div className="col-md-6 mb-2">
                                    <div className="card border border-secondary rounded">
                                        <div className="card-block text-center px-2 py-1">
                                            <h4 className="card-title mb-1">TravelGram</h4>
                                            <h5 className="mb-1">
                                                <span className="badge badge-pill theme-gradient-badge mx-1">React</span>
                                                <span className="badge badge-pill theme-gradient-badge mx-1">HTML/CSS</span>
                                                <span className="badge badge-pill theme-gradient-badge mx-1">Javascript</span>
                                                <span className="badge badge-pill theme-gradient-badge mx-1">SQL</span>
                                            </h5>
                                            <p className="card-text p-y-1 mb-1">
                                                A simple vacation sharing social website to document and discover new
                                                trips around the globe.
                                            </p>
                                            <a className="btn btn-light" href="https://github.com/petermking18/VacationGram" target="_blank">See on Github</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card border border-secondary rounded">
                                        <div className="card-block text-center px-2 py-1">
                                            <h4 className="card-title mb-1">Algorithm Library</h4>
                                            <h5 className="mb-1"><span className="badge badge-pill theme-gradient-badge">C++</span></h5>
                                            <p className="card-text p-y-1 mb-1">
                                                A collection of sorting and searching algorithms.
                                                Sort data. Search graphs. Find travelling salesman solutions with naive, dynamic programming,
                                                and metaheuristic techniques.
                                            </p>
                                            <a className="btn btn-light" href="https://github.com/petermking18/Algorithm-Library" target="_blank">See on GitHub</a>
                                        </div>
                                    </div>
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
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}