import './city.css';

export const City = ({ name, population, area, district, photo }) => {
    const formattedPopulation = population.toLocaleString('cs-CZ')
    return (
        <div className='city'>
        <img src={photo} alt={`Obrázek města ${name}`} />
        <div>
          <p><span>Město: </span>{name}</p>
          <p><span>Počet obyvatel: </span>{formattedPopulation}</p>
          <p><span>Rozloha města: </span>{area} km²</p>
          <p><span>Okres: </span>{district}</p>
        </div>
      </div>
)}

