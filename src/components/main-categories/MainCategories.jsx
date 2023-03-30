import './mainCategories.css'
import navbarItems from '../../data/navbar-items.json'

const MainCategories = () => {
    const filteredData = navbarItems.filter((item) => item.showed === true);
    return (
        <div className="main-categories">
            <div className="container">
                <nav>
                    <ul>
                        {filteredData.map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MainCategories