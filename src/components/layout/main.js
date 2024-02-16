import '../../assets/styles/main.css';
import React from "react";
class Main extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
 
    componentDidMount() {
        fetch("http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book")
            .then((res) => res.json())
            .then((json) => {
                console.log(json.data);
                this.setState({
                    items: json.data,
                    DataisLoaded: true,
                });
            });
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>
                </div>
            );
 
        return (
                <div className="mainContainer">
                    <h2>Explore Our E-Books</h2>
                    <button className='seeAllButton'>See All</button>
                    <div className='ebooksContainer'>

                    <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.attributes.book.id}>
                                <div>
                                    <img className='bulkImage' src={item.attributes.book.image_url} alt=''></img>
                                </div>
                                <div>
                                    <strong>
                                    {item.attributes.book.title}...
                                    </strong>
                                </div>
                                <div>
                                {item.attributes.currency} {item.attributes.compare_at_price}
                                </div>
                                <button className='showDetailsButton'>Show Details</button>
                            </ol>
                        </div>
                    ))}
                </div>                        
                                                    </div>
                                                    </div>
                                                    
        );
    }
}
 
export default Main;