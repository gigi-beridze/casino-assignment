import './card.css'

const Card = ({item}) => {
    return (
        <div className="card">
            <div className="container">
                <div className="item">
                    {item.map((card) => (
                        <div key={card.id} className="cards">
                            <div className="img-wrap">
                            <img style={{ cursor: "pointer"}} src={card.image} alt={card.id} />
                                <div className="show-me">
                                    <img src="./cards_img/pause.png" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card