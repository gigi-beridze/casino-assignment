import './provider.css'
import Selection from '../UI/Selection'

const Provider = ({provider}) => {
    return (
        <div className="provider">
            <div className="container">
                <div className="provider-items">
                    <Selection />
                    {provider.map((provide) => (
                        <div key={provide.id} >
                            <img style={{ cursor: "pointer"}} src={provide.image} alt={provide.id} />
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default Provider