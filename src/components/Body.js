import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../constants"
import { useState } from "react"
  // no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

function filterData(searchTxt,restaurants) {
    const data = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchTxt)
)
    return data
}

const Body = () => {

    const [searchTxt,setSearchTxt] = useState("")

    const [restaurants,setRestaurants] = useState(restaurantList)
    return (
        <>
            <div className="search-container">
                <input 
                type="text" 
                className="search-input"
                placeholder="Search"
                value= {searchTxt}
                onChange = {(e) => setSearchTxt(e.target.value)} />
                <button 
                className="search-btn"
                onClick={() => {
                    // need to filter the data
                    const data = filterData(searchTxt,restaurants)
                    setRestaurants(data)
                }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
                    })
                }
            </div>
       </>
   )}
   
export default Body