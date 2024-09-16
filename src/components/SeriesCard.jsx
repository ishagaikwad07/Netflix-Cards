export const SeriesCard = (props)=>{
  // console.log(props);
  const {id,img_url,name,rating,description,cast,genre,watch_url} =props.data;

  const btn_style={
    padding:"1.2rem 2.4rem",
    border: "none",
    fontSize:"1.6rem",
    backgroundColor:"var(--bnt-hover-bg-color)",
    color:"var(--bg-color)"
  }
    return (
        <li className="card">
          <div>
          <img  width = "40%" height = "40%" src={img_url} alt={name} />
            </div>
            <div className="card-content">
          <h2>Name: {name}</h2>
          <h3 >Rating: {rating}</h3>
          <p >Summary:{description} </p>
          <p >Genre: {genre.join("")}</p>
          <p >Cast:{cast.join("")}</p>
          <a href={watch_url} target ="_blank" rel="noopener noreferrer">
          <button style={btn_style}>Watch Now</button>
          </a>
          </div>
        </li>
    );
};

export default SeriesCard;