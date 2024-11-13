import React from 'react'

const cardStyles = {
    card: {
        width: "18rem",
        display: "flex",
        height: "100%",
    },
    image: {
        height: "200px",
        width: "100%",
        objectFit: "cover"
    },
    textCard: {
        padding: "0 1em",
        height: "115px",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        textOverflow: "ellipsis",
    }
}

function Card(props) {
    return (
        <div className="card mt-3 text-center" style={cardStyles.card}>
            <img src={props.img} className="card-img-top" alt="..." style={cardStyles.image} />

            <h4 className="card-title">{props.titleCard}</h4>
            <p className="card-text" style={cardStyles.textCard}>{props.textCard}</p>
            <div className="border-top pt-2">
                <a href={props.url} className="btn btn-primary">More info</a>
            </div>

        </div>
    )
}

export default Card