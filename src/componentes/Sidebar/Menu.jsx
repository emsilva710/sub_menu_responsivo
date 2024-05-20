import React, { useEffect, useRef } from "react";
import '../Sidebar/Menu.css'; // Asegúrate de que esta ruta es correcta
import miImagen from '../Assets/logo.png';

const Menu = () => {
    const headerToggleRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const showMenu = () => {
            navbarRef.current.classList.toggle('show-menu');
            headerToggleRef.current.classList.toggle('bx-x');
        };

        headerToggleRef.current.addEventListener('click', showMenu);

        const linkColor = navbarRef.current.querySelectorAll('.nav__link');

        function colorLink() {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }

        linkColor.forEach(l => l.addEventListener('click', colorLink));

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            headerToggleRef.current.removeEventListener('click', showMenu);
            linkColor.forEach(l => l.removeEventListener('click', colorLink));
        };
    }, []);

    return (
        <div className="body">
            {/* HEADER */}
            <header className="header">
                <div className="header__container">
                <img src={miImagen} alt="Descripción de la imagen" className="header__img" />

                    <a href="#" className="header__logo">Bedimcode</a>

                    <div className="header__search">
                        <input type="search" placeholder="Search" className="header__input" />
                        <i className='bx bx-search header__icon'></i>
                    </div>

                    <div className="header__toggle" ref={headerToggleRef}>
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </header>

            {/* NAV */}
            <div className="nav" id="navbar" ref={navbarRef}>
                <nav className="nav__container">
                    <div>
                        <a href="#" className="nav__link nav__logo">
                            <i className='bx bxs-disc nav__icon'></i>
                            <span className="nav__logo-name">Bedimcode</span>
                        </a>

                        <div className="nav__list">
                            <div className="nav__items">
                                <h3 className="nav__subtitle">Profile</h3>

                                <a href="#" className="nav__link active">
                                    <i className='bx bx-home nav__icon'></i>
                                    <span className="nav__name">Home</span>
                                </a>

                                <div className="nav__dropdown">
                                    <a href="#" className="nav__link">
                                        <i className='bx bx-user nav__icon'></i>
                                        <span className="nav__name">Profile</span>
                                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                    </a>

                                    <div className="nav__dropdown-collapse">
                                        <div className="nav__dropdown-content">
                                            <a href="#" className="nav__dropdown-item">Passwords</a>
                                            <a href="#" className="nav__dropdown-item">Mail</a>
                                            <a href="#" className="nav__dropdown-item">Accounts</a>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="nav__link">
                                    <i className='bx bx-message-rounded nav__icon'></i>
                                    <span className="nav__name">Messages</span>
                                </a>
                            </div>

                            <div className="nav__items">
                                <h3 className="nav__subtitle">Menu</h3>

                                <div className="nav__dropdown">
                                    <a href="#" className="nav__link">
                                        <i className='bx bx-bell nav__icon'></i>
                                        <span className="nav__name">Notifications</span>
                                        <i className='bx bx-chevron-down nav__icon nav__dropdown-icon'></i>
                                    </a>

                                    <div className="nav__dropdown-collapse">
                                        <div className="nav__dropdown-content">
                                            <a href="#" className="nav__dropdown-item">Blocked</a>
                                            <a href="#" className="nav__dropdown-item">Silenced</a>
                                            <a href="#" className="nav__dropdown-item">Publish</a>
                                            <a href="#" className="nav__dropdown-item">Program</a>
                                        </div>
                                    </div>

                                </div>

                                <a href="#" className="nav__link">
                                    <i className='bx bx-compass nav__icon'></i>
                                    <span className="nav__name">Explore</span>
                                </a>
                                <a href="#" className="nav__link">
                                    <i className='bx bx-bookmark nav__icon'></i>
                                    <span className="nav__name">Saved</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="nav__link nav__logout">
                        <i className='bx bx-log-out nav__icon'></i>
                        <span className="nav__name">Log Out</span>
                    </a>
                </nav>
            </div>

            {/* CONTENTS */}
            <main>
                <section>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?</p>
                </section>
            </main>
        </div>
    );
};

export default Menu;
