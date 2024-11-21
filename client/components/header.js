import Link from 'next/link';

const Header = ({ currentUser }) => {
    return (
        <header className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className="navbar-brand" href="/">
                {/* <img src="/logo.png" alt="GitTix" width="30" height="30" className="d-inline-block align-top mr-2" /> */}
                GitTix
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id="navbarNav">
                <ul className='navbar-nav'>
                    {currentUser ? (
                        <li className='nav-item'>
                            <Link className='nav-link' href="/auth/signout">Sign Out</Link>
                        </li>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link className='nav-link' href="/auth/signin">Sign In</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' href="/auth/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
