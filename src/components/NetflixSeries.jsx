import seriesData from "../api/seriesData.json"

const NetflixSeries = () =>{  
  
  return (
    <ul>
      {
        seriesData.map((curElem)=>{
         return( <li>
          <div>
          <div>
          </div>
          <img  width = "40%" height = "40%" src={curElem.img_url} alt="Queen of Tears Couple" />
          <h2>Name: {curElem.name}</h2>
          <h3>Rating: {curElem.rating}</h3>
          <p>
            Summary:{curElem.description}
          </p>
          <p>Genre: {curElem.genre}</p>
          <p>Cast:{curElem.cast}</p>
          <a href={curElem.watch_url} target ="_blank">
          <button>Watch Now</button>
          </a>
        </div>
        </li>
        )})
      }
      
    </ul>
    );
  };

export default NetflixSeries;


   