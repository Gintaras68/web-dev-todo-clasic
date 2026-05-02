import './Services.css';
import { Link } from 'react-router-dom';

function Services({services}) {


  return (
    <div className="services">
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.serviceId}>
            <Link to={service.serviceId}>{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
