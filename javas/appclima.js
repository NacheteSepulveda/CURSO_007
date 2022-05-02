window.addEventListener('load' , ()=>{
    let lon
    let lat
    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescrip = document.getElementById('temperatura-descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let iconoAnim = document.getElementById('icono-animado')
    let vientoVelo = document.getElementById('vientoVelo')   


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude


            //PARA LLAMAR A LA API DEL CLIMA
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Maipu&lang=es&units=metric&appid=be24f2a3c5bbdb2d5305bb3858bcd2ab`
            //console.log(url)

            fetch(url)
                .then(response => {return response.json() })
                .then(data => {
                    //PARA VER LOS GRADOS
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = temp +' °C'
                    

                    //PARA VER LA DESCRIPCION DE LA TEMPERATURA
                    let desc = data.weather[0].description 
                    temperaturaDescrip.textContent = desc.toUpperCase()


                    //PARA VER NUESTRA UBICACION
                    ubicacion.textContent = data.name
                    

                    //PARA VER LA VELOCIDAD DEL VIENTO
                    vientoVelo.textContent = data.wind.speed + ' m/s'
                    console.log(data.wind.speed)

                    

                    //ICONOS DINAMICOS DE CLIMA
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                          iconoAnimado.src='animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoAnimado.src='animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoAnimado.src='animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoAnimado.src='animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoAnimado.src='animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoAnimado.src='animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoAnimado.src='animated/cloudy-day-1.svg'
                          console.log('por defecto');
                  }
                })

                .catch(error => {
                    console.log(error)
                })

            
        })
          
    }


})