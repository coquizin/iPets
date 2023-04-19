import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <Image src={service.icon} alt={service.title} />
      </div>
      <div className="service-card__title">{service.title}</div>
      <div className="service-card__description">{service.description}</div>
    </div>
  );
};

export default ServiceCard;
