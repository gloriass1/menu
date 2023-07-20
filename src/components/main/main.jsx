import './main.css'

function Main() {
    return (
        <main>
            <div className="sections">
                <div className="section">
                    <h2>Burgers</h2>
                    <p>hamburger <span>3$</span></p>
                    <p>chicken burger <span>3$</span></p>
                    <p>BBB (our special burger) <span>5$</span></p>
                </div>

                <div className="section">
                    <h2>pizza</h2>
                    <p>lebanese pizza <span>5$</span></p>
                    <p>pepperoni pizza <span>6$</span></p>
                    <p>chicken barbecue pizza <span>7$</span></p>
                </div>

                <div className="section">
                    <h2>sandwiches</h2>
                    <p>Tawouk <span>3$</span></p>
                    <p>fries <span>1.5$</span></p>
                </div>

                <div className="section">
                    <h2>Salads</h2>
                    <p>Chicken Ceaser <span>6$</span></p>
                    <p>classic chef <span>7$</span></p>
                </div>
                <div className="section">
                    <h2>beverages</h2>
                    <p>soft drink <span>1$</span></p>
                    <p>beer <span>2$</span></p>
                    <p>whiskey <span>4$</span></p>
                    <p>Vodka <span>4$</span></p>
                    <p>wine <span>6$ (small)   12$ (big)</span></p>
                    <p>juice <span>0.5$</span></p>
                    <p>water <span>0.5$ (small)  1$ (big)</span></p>
                </div>
            </div>
        </main>
    )
}

export default Main
