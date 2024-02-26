// import axios from "./axios";
// import { useState, useEffect } from "react";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import "./Row.css";
// const base_url = "https://image.tmdb.org/t/p/original";

// function Row({ title, fetchUrl }) {
//   let handleClick = (movie) => {
//     if (trailerUrl) setTrailerUrl("");
//     else {
//       movieTrailer(movie.title || movie.name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };
//   const opts = {
//     height: "390",
//     width: "99%",
//     playerVars: {
//       autoplay: 0,
//     },
//   };
//   // let response = [];
//   let [movies, setMovies] = useState([]);
//   let [trailerUrl, setTrailerUrl] = useState("");
//   // console.log(requests.fetchTrending);
//   useEffect(() => {
//     axios.get(fetchUrl).then((response) => {
//       // response = data;
//       setMovies(response.data.results);
//     });
//   }, []);

//   return (
//     <div className="text-2xl">
//       <h2>{title}</h2>
//       <div className="row_posters">
//         {movies.map((item) => {
//           return (
//             <img
//               className="row_poster"
//               src={`${base_url}${item.poster_path}`}
//               onClick={() => {
//                 handleClick(item);
//               }}
//               alt={item.name}
//             />
//           );
//         })}
//       </div>
//       <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
//     </div>
//   );
// }
// export default Row;
//////////////////////
import axios from "./axios";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  // let response = [];
  let [movies, setMovies] = useState([]);
  let [trailerUrl, setTrailerUrl] = useState("");
  // console.log(requests.fetchTrending);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      console.log(response.data.results);
      // response = data;
      setMovies(response.data.results);
    });
  }, []);

  let handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((item) => {
          return (
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${item.poster_path}`}
              onClick={() => handleClick(item)}
              alt={item.name}
            />
          );
        })}
      </div>
      <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
    </div>
  );
}

export default Row;

// function Row({ title, fetchUrl, isLargeRow }) {
//   // let response = [];
//   let [movies, setMovies] = useState([]);
//   let [trailerUrl, setTrailerUrl] = useState("");
//   // console.log(requests.fetchTrending);
//   useEffect(() => {
//     axios.get(fetchUrl).then((response) => {
//       console.log(response.data.results);
//       // response = data;
//       setMovies(response.data.results);
//     });
//   }, []);

//   let handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie.title || movie.name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "99%",
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   return (
//     <div className="row">
//       <h2>{title}</h2>

//       <div className={`row_poster ${isLargeRow && "row_posterLarge"}`}>
//         {movies.map((item) => {
//           return (
//             <img
//               className="row_poster"
//               src={`${base_url}${item.poster_path}`}
//               onClick={() => handleClick(item)}
//               alt={item.name}
//             />
//           );
//         })}
//       </div>
//       <div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
//     </div>
//   );
// }

// export default Row;
