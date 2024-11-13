import React from 'react'

const navList = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" }
];

function Navbar() {
    const navListMap = navList.map((title) => {
        if (title.title == "Home") {
            return (
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={title.href}>{title.title}</a>
                </li>
            )
        } else {
            return (
                <li className="nav-item">
                    <a className="nav-link" href={title.href}>{title.title}</a>
                </li>
            )
        };
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h5 style={{ color: "white" }}>Start Bootstrap</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navListMap}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar