import { useEffect, useState } from "react"
import "./Card.css"

interface Card {
    name: string,
    time: number,
    animation: boolean
}

function Card({ card }: { card: Card }) {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(card.animation);
        setTimeout(() => {
            setAnimation(false);
        }, 600);
    }, [card]);

    return (
        <div className="card-section">
            <div className="card">
                <div className="top-card">
                    <span className={`new ${animation && "new-animation"}`}>
                        {card.time < 10 ? "0" + card.time : card.time}
                    </span>
                </div>

                <div className={`card-change ${animation && "card-animation"}`}>
                    <span className={`old ${animation && "old-animation"}`}>
                        {card.time < 10 ? "0" + card.time : card.time}
                    </span>
                </div>

                <div className="bottom"></div>

                <div className="circle left"></div>
                <div className="line"></div>
                <div className="circle right"></div>
            </div>
            <p className="name">{card.name}</p>
        </div>
    )
}

export default Card