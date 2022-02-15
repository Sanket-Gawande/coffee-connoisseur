import React from "react";

const getPlaces = async (
  latlong = "-87.770231,41.878968",
  category = "catering"
) => {
  

  const rawData = await fetch(
    `https://api.geoapify.com/v2/places?categories=${category}&limit=10&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&filter=circle:${latlong},5000`
  );
  const obj = await rawData.json();

  const imgReq = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=30&query=food,coffee&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API}`
  );
  const { results } = await imgReq.json();

  // injecting images in stores object
  const stores = obj.features?.map((item, index) => {
    return {
      ...item,
      img: results
        ? results[index].urls.small
        : "https://images.unsplash.com/photo-1644868731706-bdb6485f4274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    };
  });

  return { features: stores };
};

export default getPlaces;
