let container = document.querySelector('#location-map');

    let map = L.map(container).setView([-23.556647, -46.6586428], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,  <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoia3Jsb3N2aXR0b3IiLCJhIjoiY2p2eXF6YzgxMGluczQzcDhlbTY0bXBnOSJ9.uB7Wlwn4cOpwZrpwn6p68g',
    }).addTo(map);
    
    L.marker([-23.556647, -46.6586428]).addTo(map)
        // .bindPopup('{{ item.es_name }}')
        // .openPopup();