$(document).ready(function() {
    // Property data (replace with actual API data in a real project)
    const properties = [
        { id: 1, type: 'House', city: 'New York', region: 'Downtown', space: '2+1', price: 320000, img: 'images/home2.jpg' },
        { id: 2, type: 'Apartment', city: 'Los Angeles', region: 'Suburbs', space: '1+1', price: 200000, img: 'images/home1.png' },
        { id: 3, type: 'House', city: 'Chicago', region: 'Downtown', space: '3+2', price: 450000, img: 'images/home3.jpg' },
        { id: 4, type: 'House', city: 'Chicago', region: 'Downtown', space: '3+2', price: 550000, img: 'images/home7.jpg' },
        { id: 5, type: 'House', city: 'New York', region: 'Suburbs', space: '2+1', price: 550000, img: 'images/home4.jpg' },
        { id: 6, type: 'House', city: 'Los Angeles', region: 'Downtown', space: '1+1', price: 850000, img: 'images/home5.jpg' },
        { id: 7, type: 'House', city: 'Los Angeles', region: 'Suburbs', space: '2+1', price: 950000, img: 'images/home6.jpg' },
        // More property data...
    ];

    // Function to generate property cards
    function generateProperties(filteredProperties) {
        $('#property-grid').empty();
        filteredProperties.forEach(property => {
            const propertyCard = `
                <div class="col-md-4">
                    <div class="property-card">
                        <img src="${property.img}" alt="Property Image">
                        <h5>${property.type} in ${property.city}</h5>
                        <p>${property.region} | ${property.space}</p>
                        <div class="price">$${property.price.toLocaleString()}</div>
                    </div>
                </div>
            `;
            $('#property-grid').append(propertyCard);
        });
    }

    // Initial load (show all properties)
    generateProperties(properties);

    // Handle filter changes
    $('#city, #region, #space, #price').on('change input', function() {
        const city = $('#city').val();
        const region = $('#region').val();
        const space = $('#space').val();
        const price = parseInt($('#price').val());

        // Filter properties based on selected values
        const filteredProperties = properties.filter(property => {
            return (!city || property.city === city) &&
                   (!region || property.region === region) &&
                   (!space || property.space === space) &&
                   property.price <= price;
        });

        // Generate filtered property cards
        generateProperties(filteredProperties);
        $('#price-value').text('$' + price.toLocaleString());
    });
});
