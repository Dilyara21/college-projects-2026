// Load cafes
function loadCafes() {
  const container = document.getElementById('cafes-list');
  placesData.cafes.forEach(cafe => {
    const html = `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${cafe.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${cafe.name}">
          <div class="card-body">
            <h5 class="card-title">${cafe.name}</h5>
            <p class="text-muted">${cafe.address}</p>
            <p class="rating">⭐ ${cafe.rating}</p>
            <p class="card-text">${cafe.desc}</p>
          </div>
        </div>
      </div>`;
    container.innerHTML += html;
  });
}

// Load attractions
function loadAttractions() {
  const container = document.getElementById('attractions-list');
  placesData.attractions.forEach(attr => {
    const html = `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${attr.image}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${attr.name}">
          <div class="card-body">
            <h5 class="card-title">${attr.name}</h5>
            <p class="text-muted">${attr.desc}</p>
            <p class="rating">⭐ ${attr.rating}</p>
          </div>
        </div>
      </div>`;
    container.innerHTML += html;
  });
}

// Initialize Map
function initMap() {
  const mapContainer = document.getElementById('map-container');
  mapContainer.innerHTML = '<div id="map" class="w-100"></div>';
  
  const map = L.map('map').setView([51.1694, 71.4491], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  placesData.attractions.forEach(attr => {
    L.marker([attr.lat, attr.lng]).addTo(map)
      .bindPopup(`
        <b>${attr.name}</b><br>
        ${attr.desc}<br>
        ⭐ ${attr.rating}
      `);
  });
}

// Form handler
document.getElementById('add-place-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Место успешно добавлено! (В реальном проекте сохранилось бы в базу)');
  this.reset();
});

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  loadCafes();
  loadAttractions();
  initMap();
});