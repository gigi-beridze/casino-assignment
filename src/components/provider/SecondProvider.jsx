import './secondProvider.css'
import Selection from '../UI/Selection'

const secondProvider = ({provider}) => {
    return (
        <div className="provider">
            <div className="container">
                <div className="provider-items">
                    <nav>
                        <ul>
                            <Selection />
                            {provider.map((item, index) => (
                                <li key={index}>
                                    <a href={item.title}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mobile-menu">
                        <button>choose games</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default secondProvider