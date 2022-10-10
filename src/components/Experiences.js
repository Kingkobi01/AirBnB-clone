import React from "react";
import Card from "./Card"
import data from "../data"

export default function Experiences() {
    const cards = data.map((item) => {
        return <Card
            key={item.id}
            item = {item}
        />
    })
    return (
        <section className="experiences">
            {cards}
            

        </section>
    )
}

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
