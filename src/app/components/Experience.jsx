"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const jobs = [
  {
    company: 'Solera',
    description: 'Estuve a cargo de un proyecto de multi-step form para automatizar el traspaso de clientes de otros fondos de inversion al nuestro. En cada paso eran necesarias validaciones que consumían API’s externas, y también tuvimos que agregar nuestros propios servicios en PHP. Adicionalmente, se programaron jobs para hacer remarketing, con los usuarios que interactuaron con el form, a través de integraciones con Salesforce. También se dio mantenimiento al dashboard de los clientes, el cual estaba hecho en ReactJS, y se añadieron funcionalidades nuevas como desbloqueo de cuenta.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },{
    company: 'Globant',
    description: 'Fui asignado a un proyecto para Disney, en el cual actualicé la versión del Drupal CMS de la web de Marvel. Además, se le dio mantenimiento y se trabajó en nuevas secciones. Dicha experiencia me permitió introducirme en el mundo del Git Flow, Jenkins, y conocer otras prácticas de una compañía reconocida mundialmente. Adicionalmente, participé en el Desarrollo de un app de delivery, en la cual refactorizamos componentes, aplicando los principios SOLID. También se crearon tests unitarios con Jest, se implementó Auth0 Login y se corrigieron bugs.',
    image: 'https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg'
  },{
    company: 'Impulse Growth Partner',
    description: 'Estuve a cargo de un equipo de un 3-developer team y proyectos de Marketing para conseguir objetivos de conversion y Google PageSpeed score. Maquetamos módulos reutilizables con Hubspot y realizamos integraciones con dicho CRM apoyandonos, principalmente en Laravel, y también en MERN. Además, realizábamos auditorías e implementábamos experimentos y mejoras UX en landing pages e E-commerce. También fue la primera vez en la que pude administrar servidores Linux a través de Digital Ocean y AWS. Incluyendo despliegue de apps desde cero, configuración de certificados SSL y otras actividades. Como líder del departamento de IT, me tocó participar de la planificación, definición de OKRs, etc. Y llevé varios cursos de optimización de tiempo, motivación para equipos remotos, entre otros.',
    image: 'https://media.istockphoto.com/id/1174690086/es/foto/desarrollador-de-software-freelancer-que-trabaja-en-casa.jpg?s=612x612&w=0&k=20&c=J8hlGvefC4SS-3KuxspGuoFcXC7KfgTzewPqbtzu4Ew='
  },{
    company: 'BITEL',
    description: 'Se construyó la sección de reclamos y quejas en el nuevo website en Drupal. Consistía en un formulario con envío de correo y almacenamiento en base de datos. Además, se le dio mantenimiento al sitio anterior que se encontraba hecho con Symfony y contaba con algunas páginas que siguieron siendo utilizadas por unos meses. Otras tareas comunes fueron maquetación de landing pages y ajustes en el E-commerce.',
    image: 'https://media.istockphoto.com/id/1206638576/es/foto/dise%C3%B1ador-de-sitios-web-dise%C3%B1o-de-aplicaciones-de-planificaci%C3%B3n-creativa-desarrollo-de.jpg?s=612x612&w=0&k=20&c=7gJbKYiqy8hFfy8HAvgdjPCZTx0gCdsqppq1mnu_LUA='
  },{
    company: 'Dezain',
    description: 'Participé del flujo completo del Desarrollo de una diversidad de aplicaciones, para diferentes modelos de negocio (Almacenes, Laboratorios, Farmacias, Escuelas, Pirámides, etc.), desde el diseño de la base de datos hasta la subida al hosting.<br>Contribuí en la programación de un job para el Ministerio, el cual interactuaría con una Oracle database de siniestros.',
    image: 'https://media.istockphoto.com/id/1196702694/es/foto/dise%C3%B1adores-dibujando-el-desarrollo-de-aplicaciones-ux-sitio-web.jpg?s=612x612&w=0&k=20&c=rZmFWsKnPXxYSDU5zjDXg5jTPGJn2PkjwGrTqN5ilr4='
  }
]

const ExperienceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderTxt = (txt) => {
    return { __html: txt };
  };

  return (
    <Slider {...settings}>
      {jobs.map(job => 
        <div>
          <div className="flex">
            <div className="w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">{job.company}</h2>
              <p className="text-lg" dangerouslySetInnerHTML={renderTxt(job.description)}></p>
            </div>
            <div className="w-1/2">
              <img src={job.image} alt="Marcelo Da Ros" />
            </div>
          </div>
        </div>
      )}
    </Slider>
  );
};

export default ExperienceSlider;
