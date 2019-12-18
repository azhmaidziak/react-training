import * as React from "react";
import {Movie} from "../../../models";
import * as styles from "./MovieDetail.module.sass";


const MovieDetail= (props: { movie: Movie, onClick: (e: React.MouseEvent) => void }): React.ReactElement => {
    const {id, title,tagline, voteAverage,voteCount,releaseDate,posterPath,overview,budget,revenue,runtime,genres} = props.movie;
    return (
            <div className={styles.detail_container}>
                <div className={styles.container_top} onClick={props.onClick}>search</div>
                <div className={styles.container_middle}>
                    <div className={styles.image}>
                        <img src={posterPath} alt={title}/>
                    </div>
                    <div className={styles.description}>
                        <div>
                            <span>{title}</span> <span>{voteAverage}</span>
                        </div>
                        <div>
                            <span>{releaseDate.getFullYear()} year</span> <span>{runtime} min</span>
                        </div>
                        <div>
                            {overview}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MovieDetail;