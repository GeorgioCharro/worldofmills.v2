import React from 'react';
import Link from 'next/link';

function Topbar() {
    return (
        <div className="top-bar d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-12">
                        <Link href="/" legacyBehavior>
                            <a className="top-left">
                                Working hours: <span>Mon - Sun 8.00 - 18.00</span>
                            </a>
                        </Link>
                        <Link href="/" legacyBehavior>
                            <a className="top-left">Terms &#38; Conditions</a>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-12 d-none d-lg-block text-lg-right">
                        <div className="lan-select">
                            <form>
                                <select id="lan">
                                    <option>English</option>
                                    <option>China</option>
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

export default Topbar;
