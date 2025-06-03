export default function CityCard({ name, image, description }) {
    return (
      <div className="city-card">
        <img src={image} alt={name} className="city-image" />
        <div className="city-info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }