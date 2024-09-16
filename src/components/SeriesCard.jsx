export const SeriesCard = (props)=>{
  // console.log(props);
  const {id,img_url,name,rating,description,cast,genre,watch_url} =props.data;
    return (
        <li>
          <div>
          <img  width = "50%" height = "70%" src={img_url} alt={name} />
            </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary:{description} </p>
          <p>Genre: {genre}</p>
          <p>Cast:{cast}</p>
          <a href={watch_url} target ="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
          </a>
      
        </li>
    );
};

export default SeriesCard;