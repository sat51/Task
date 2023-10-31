import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import iso from '../../images/iso.webp';
import globe from '../../images/globe.svg';
import one from '../../images/1.webp';
import two from '../../images/2.webp';
import three from '../../images/3.webp';
import four from '../../images/4.webp';
import five from '../../images/5.webp';
import six from '../../images/6.webp';


function Home() {
    return (
        <>
            <header>
                <div className="myimage">
                    <img src={globe} alt="" className='globe' />
                </div>
                <nav>
                    <div className='logo'>
                        EsaLink <span>DATA INTEGRATION</span>
                    </div>
                    <div className="border">
                        ELECTRONIC INVOICING 2024
                    </div>
                    <ul>
                        <li>Expertise</li>
                        <li>Solutions</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                    <div className="right">
                        <button>
                            GET A DEMO
                        </button>
                        <div className="lan">
                            <select name="" id="">
                                <option value="FR"> EN </option>
                                <option value="EN"> FR </option>
                                <option value="TR"> TR </option>
                            </select>
                        </div>
                    </div>
                </nav>
                <br />
                <div className='image'>
                    <img src={iso} alt="" />
                </div>
                <br />
                <div className="heading">
                    <h1>Dematerialization</h1>
                    <h1>at the service of your business</h1>
                    <p>Esalink supports you in the digitalization of your B2B flows</p>
                </div>
                <div style={{ padding: "5%" }}>
                    <button style={{ marginRight: "2%" }}>
                        Find your EDI solution
                    </button>
                    <button>
                        Switch to electronic invoicing
                    </button>
                </div>
                <div className="animation fade-left">
                    <div className="ani">
                        <img src={one} alt="" />
                    </div>
                    <div className="ani">
                        <img src={two} alt="" />
                    </div>
                    <div className="ani">
                        <img src={three} alt="" />
                    </div>
                    <div className="ani">
                        <img src={four} alt="" />
                    </div>
                    <div className="ani">
                        <img src={five} alt="" />
                    </div>
                    <div className="ani">
                        <img src={six} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home;
