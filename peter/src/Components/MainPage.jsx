import React from 'react';
import './MainPage.scss';
import Headshot from '../Headshot.jpg';

export default class MainPage extends React.Component {
    render() {
        return <div id="mainpage">
            <div className="container py-5">
                <div className="row center-row">
                    <img src={Headshot} alt="Headshot" id="Headshot" />
                    <div className="col">
                        <h1 className="theme-gradient font-weight-bold mb-0" id="Name">Peter King</h1>
                        <br />
                        <lead className="lead">Software Developer</lead>
                    </div>
                </div>
            </div>
            <div className="container" id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                        <h5 className="mb-0">
                            <button className="theme-gradient font-weight-bold font-size-larger btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                                About Me
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aliquet eget sit amet tellus cras adipiscing enim eu. Amet nisl purus in mollis nunc sed id semper. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                        <h5 className="mb-0">
                            <button className="theme-gradient font-weight-bold btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
                                Projects
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aliquet eget sit amet tellus cras adipiscing enim eu. Amet nisl purus in mollis nunc sed id semper. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}