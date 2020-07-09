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
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            adress: business.location.adress,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        })
      }
    })
  }
}

export default Yelp;

