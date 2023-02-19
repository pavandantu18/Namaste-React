import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../constants"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer.js"

function filterData(searchTxt,restaurants) {
    const data = restaurants.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
)
    return data
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {
    
    const [searchTxt,setSearchTxt] = useState("")
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])

    useEffect(() => {
        // API call
        getRestaurants()
    },[])

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // not render component (Early)
    if(!allRestaurants) return null
    
    return (allRestaurants.length === 0) ? <Shimmer /> :(
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
                    const data = filterData(searchTxt,allRestaurants)
                    setFilteredRestaurants(data)
                }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {   filteredRestaurants?.length === 0 ? <h1>No restaurant is found with the filter</h1> :
                    filteredRestaurants.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
                    })
                }
            </div>
       </>
   )}
   
export default Body