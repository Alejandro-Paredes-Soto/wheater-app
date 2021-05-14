

const Service = (long,lat) => {


const promise = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoiZGV4Y2FybG9zIiwiYSI6ImNrb2hzNmd6MjBudGQybmxsMHFybjNvZW0ifQ.VTlqEeCl-zmlMFe-5_fYJQ`)

  return promise.then(res => res.json());
}

export default Service
