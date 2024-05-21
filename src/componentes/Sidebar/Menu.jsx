import React, { useEffect, useRef } from "react";
import '../Sidebar/Menu.css'; // Asegúrate de que esta ruta es correcta
import miImagen from '../Assets/logo.png';

const Menu = () => {
    const headerToggleRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        const mostrarMenu = () => {
            navbarRef.current.classList.toggle('mostrar-menu');
            headerToggleRef.current.classList.toggle('bx-x');
        };

        headerToggleRef.current.addEventListener('click', mostrarMenu);

        const enlacesColor = navbarRef.current.querySelectorAll('.nav__enlace');

        function colorEnlace() {
            enlacesColor.forEach(l => l.classList.remove('activo'));
            this.classList.add('activo');
        }

        enlacesColor.forEach(l => l.addEventListener('click', colorEnlace));

        // Cleanup function to remove event listeners when component unmounts
        return () => {
            headerToggleRef.current.removeEventListener('click', mostrarMenu);
            enlacesColor.forEach(l => l.removeEventListener('click', colorEnlace));
        };
    }, []);

    return (
        <div className="cuerpo">
            {/* CABECERA */}
            <header className="cabecera">
                <div className="contenedor-cabecera">
                    <img src={miImagen} alt="Descripción de la imagen" className="cabecera__img" />
                    

                    <a href="#" className="cabecera__logo">Inova8M</a>

                    <div className="cabecera__toggle" ref={headerToggleRef}>
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </header>

            {/* NAVEGACION */}
            <div className="navegacion" id="navbar" ref={navbarRef}>
                <nav className="contenedor-nav">
                    <div>
                        <a href="#" className="nav__enlace nav__logo">
                            <i className='bx bxs-disc nav__icono'></i>
                            <span className="nav__logo-nombre">Inova8M</span>
                        </a>

                        <div className="lista-nav">
                            <div className="items-nav">
                                <h3 className="nav__subtitulo">Perfil</h3>

                                <a href="#" className="nav__enlace activo">
                                    <i className='bx bx-home nav__icono'></i>
                                    <span className="nav__nombre">Inicio</span>
                                </a>

                                <div className="nav__desplegable">
                                    <a href="#" className="nav__enlace">
                                        <i className='bx bx-user nav__icono'></i>
                                        <span className="nav__nombre">Perfil</span>
                                        <i className='bx bx-chevron-down nav__icono nav__desplegable-icono'></i>
                                    </a>

                                    <div className="nav__desplegable-colapso">
                                        <div className="nav__desplegable-contenido">
                                            <a href="#" className="nav__desplegable-item">Contraseñas</a>
                                            <a href="#" className="nav__desplegable-item">Correo</a>
                                            <a href="#" className="nav__desplegable-item">Cuentas</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="nav__desplegable">
                                    <a href="#" className="nav__enlace">
                                        <i className='bx bx-user nav__icono'></i>
                                        <span className="nav__nombre">Perfil</span>
                                        <i className='bx bx-chevron-down nav__icono nav__desplegable-icono'></i>
                                    </a>

                                    <div className="nav__desplegable-colapso">
                                        <div className="nav__desplegable-contenido">
                                            <a href="#" className="nav__desplegable-item">Contraseñas</a>
                                            <a href="#" className="nav__desplegable-item">Correo</a>
                                            <a href="#" className="nav__desplegable-item">Cuentas</a>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="nav__enlace">
                                    <i className='bx bx-message-rounded nav__icono'></i>
                                    <span className="nav__nombre">Mensajes</span>
                                </a>
                            </div>

                            <div className="items-nav">
                                <h3 className="nav__subtitulo">Menú</h3>

                                <div className="nav__desplegable">
                                    <a href="#" className="nav__enlace">
                                        <i className='bx bx-bell nav__icono'></i>
                                        <span className="nav__nombre">Notificaciones</span>
                                        <i className='bx bx-chevron-down nav__icono nav__desplegable-icono'></i>
                                    </a>

                                    <div className="nav__desplegable-colapso">
                                        <div className="nav__desplegable-contenido">
                                            <a href="#" className="nav__desplegable-item">Bloqueados</a>
                                            <a href="#" className="nav__desplegable-item">Silenciados</a>
                                            <a href="#" className="nav__desplegable-item">Publicar</a>
                                            <a href="#" className="nav__desplegable-item">Programar</a>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="nav__enlace">
                                    <i className='bx bx-compass nav__icono'></i>
                                    <span className="nav__nombre">Explorar</span>
                                </a>
                                <a href="#" className="nav__enlace">
                                    <i className='bx bx-bookmark nav__icono'></i>
                                    <span className="nav__nombre">Guardado</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="nav__enlace nav__cerrar-sesion">
                        <i className='bx bx-log-out nav__icono'></i>
                        <span className="nav__nombre">Cerrar Sesión</span>
                    </a>
                </nav>
            </div>

            {/* CONTENIDOS */}
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
