import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Topbar3() {
    return (
        <div className="top-bar style-3 d-none d-sm-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-data">
                            <ul
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                    padding: 0,
                                    margin: 0,
                                    listStyle: 'none',
                                }}
                            >
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <AiOutlineMail
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginRight: '8px',
                                        }}
                                    />
                                    <span style={{ color: 'white' }}>worldofmills@gmail.com</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <AiOutlinePhone
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginRight: '8px',
                                        }}
                                    />
                                    <span style={{ color: 'white' }}>+971 52 621 1664</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaMapMarkerAlt
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginRight: '8px',
                                        }}
                                    />
                                    <span style={{ color: 'white' }}>Industrial Area 10, Sharjah, UAE</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="lan-select">
                            <form>
                                <select id="lan">
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Bangla</option>
                                    <option>Hindi</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar3;
