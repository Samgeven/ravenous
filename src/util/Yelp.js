const apiKey = 'Jj1VxXdhemreIDEYH0DGMd2YP00w54jZPUUxiBzK3v74epmXEkQCA8SrES_OF9vgux0Tchx8T56hCbv5bKeirQFrEoiOl3nxQCG4umEHWi_lF8VlnT-PVpWQN3YAX3Yx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}` 
      }
    }
    )
    .then(response => response.json())
    .then(jsonResponse => {
      if(jsonResponse.businesses) {
        console.log(jsonResponse.businesses)
        jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
          }
        })
      }
    })
  }
}

export default Yelp;

