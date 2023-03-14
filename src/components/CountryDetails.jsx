import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();

  const country = countries.find((elem) => elem.alpha3Code === id);

  const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

  return (
    <div className="col-7 details">
      <img src={flag} alt="flag" />
      <h1>{country.name.official}.</h1>
      <p>Capital: {country.capital}.</p>
      <p>Area: {country.area} kms.</p>
      {country.borders.length > 0 && (
        <div>
          Borders:
          {country.borders.map((border) => (
            <div key={border} className="column">
              <Link to={`/${border}`}>{border}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CountryDetails;
