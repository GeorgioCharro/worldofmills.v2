import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function ApprochCard({ thumbnail, icon, heading, text, btnText, pageLink }) {
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-approch-card">
                <div
                    className="card-thumb bg-cover"
                    style={{ backgroundImage: `url(${thumbnail.src})` }}
                />
                <div className="content">
                    <div className="case-cat">
                        <Link href={pageLink} legacyBehavior>
                            <a>{icon}</a>
                        </Link>
                    </div>
                    <h3>
                        <Link href={pageLink} legacyBehavior>
                            <a>{heading}</a>
                        </Link>
                    </h3>
                    <p>{text}</p>
                    <Link href={pageLink} legacyBehavior>
                        <a className="read-btn">
                            {btnText} <BsArrowRight />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ApprochCard;
