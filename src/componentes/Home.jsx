import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import fetchProjects from '../contentfulClient.js';

function Home() {
    const [isActive, setIsActive] = useState(false);

    const [proyectos, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };

        getProjects();
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    console.log(proyectos)


    return (
        <div className="index-desktop d-none d-lg-block">
            <section className="home-section">
                <div className="home-section-title">
                    <div className="hello-text">¡Hola!</div>
                    <div className="name">
                        Soy Alan Valdez
                    </div>
                    <h1>Desarrollador Front End</h1>
                </div>
                <a href="#aboutMe" className="down-button">
                    <Icon icon="line-md:chevron-down-circle" width="80" height="80"/>
                </a>
            </section>

            <section id="aboutMe" className="about-me-section">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="enlaces-area">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="m-auto enlace enlace-proyectos" onClick={handleClick}>
                                            <Icon icon="solar:folder-line-duotone" className="icono"/>
                                            <span>Proyectos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="about-me-text">
                                <div className="title">Desarrollador
                                    Front End
                                </div>
                                <div className="text">Soy desarrollador
                                    Front-End con experiencia en diseño de interfaces, implementación de componentes
                                    visuales y desarrollo web responsivo.
                                    Combino creatividad con código para construir productos que no solo se ven bien,
                                    sino que también funcionan de forma fluida.
                                    Mi enfoque está en HTML, CSS, JavaScript y tecnologías modernas como React y SCSS.
                                </div>
                                <div className="about-me-words">
                                    <span>25 años</span>
                                    <span>Lic. Diseño Animación y Arte digital</span>
                                    <span>Nubir Estudio Digital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section id="proyectos" className={`project-section ${isActive ? 'active' : ''}`}>
                <div className="container">
                    <div className="title">
                        <span>Proyectos</span>
                        <div className="close" onClick={handleClick}>
                            <Icon icon="ic:round-close" width="4em" height="4em"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4">
                            {proyectos.map((projectos) => (
                                <a href={projectos.fields.link} target="_blank" key={projectos.sys.id}>
                                    <div className="proyecto">
                                        <div className="info-area">
                                            <div className="img">
                                                <img src={projectos.fields.imagen?.fields?.file?.url
                                                } alt="" className="img-fluid"/>
                                            </div>
                                            <div className="title-area">
                                                <div className="title-project">
                                                    {projectos.fields.title}
                                                </div>
                                                <div className="type">
                                                    {projectos.fields.descripcion}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-proyect">
                                            <div className="link">{projectos.fields.link?.replace(/^https?:\/\//, '')}</div>
                                            <div className="technologies">
                                                {projectos.fields.tecnologias.map((tecnologia, index) => (
                                                    <img key={index} src={tecnologia.fields.file.url} alt={tecnologia.fields.file.title}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Home;
