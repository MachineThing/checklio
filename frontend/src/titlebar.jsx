import React from 'react';

export const TitleBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Checklio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#titlebarNav" aria-controls="titlebarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="titlebarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link">My Boards</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}