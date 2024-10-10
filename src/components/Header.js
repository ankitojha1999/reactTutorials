const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgcdn.stablediffusionweb.com/2024/5/14/1e972ce3-34e8-4396-93c3-148df1c5ec6b.jpg" alt="logo"/>
            </div>

            <div className="nav-items">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;