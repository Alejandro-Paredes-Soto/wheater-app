
const api = {
    key: "5b881f6447593d97ee91f3b5027f1e09",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const ServiceWheater = (state) => {
    
    
    const promise = fetch(`${api.base}weather?q=${state}&units=metric&APPID=${api.key}`)

  return promise.then(res => res.json());
}

export default ServiceWheater
