import React from "react";

export default function Card(props) {
    let display = "block"
    let statusText
    // let statusText = <div className="status">SOLD OUT</div>
    if (props.item.openSpots === 0) {
        statusText = <div style={{"display":display}} className="status sold-out">SOLD OUT</div>
    } else if (props.item.location === "Online") {
        statusText = <div style={{ "display": display }} className="status online">ONLINE</div>

    } else {
        display = "none"
    }
    return (
        <div className="card">
            <div className="exp--thumbnail">
                <img src={`images/${props.item.coverImg}`} alt="" className="card--img" />
                {statusText}
            </div>
            <div className="stats">
                <img src="images/star.png" alt="" className="card--star" />
                <span className="points">{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) •</span>
                <span className="location grey"> {props.item.country}</span>
            </div>
            <div className="about">
                {props.item.title}
            </div>
            <div className="price grey">
                <span>From ${props.item.price}.00</span>/person.
            </div>

        </div>
    )
}