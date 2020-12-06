import React from 'react';
import './MainPage.scss';

export default class MainPage extends React.Component {
    render() {
        return <div id="mainpage">
            <div className="container pt-2">
                <h1 className="font-weight-bold">Peter King</h1>
            </div>
            <ul className="container mt-3">
                <li>
                    <h2 className="font-weight-bold"><a data-toggle="collapse" href="#aboutMe">About Me</a></h2>
                    <div className="collapse" id="aboutMe">
                        <div className="card card-body bg-dark">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet. Semper risus in hendrerit gravida.
                        </div>
                    </div>
                </li>
                <li>
                    <h2 className="font-weight-bold"><a data-toggle="collapse" href="#myProjects">My Projects</a></h2>
                    <div className="collapse" id="myProjects">
                        <div className="container-fluid bg-dark">
                            <div className="row flex-row flex-nowrap py-3" id="projectsContainer">
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card one</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card two</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card three</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card four</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card five</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card six</div>
                                </div>
                                <div className="col-3">
                                    <div className="card card-block bg-secondary pl-2 py-3">Card seven</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    }
}