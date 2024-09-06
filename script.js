document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001663f7ff92661435d49e861a305ae3e61&format=json&limit=1000'
    function fetchaqi(){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const no2cities=data.records.filter(record => {return record.pollutant_id=="NO2"})
                console.log(no2cities)
                let text=``
                for(let i=0;i<100;i++){
                        text+=`NO2 emission from ${no2cities[i].city}, ${no2cities[i].station} station : ${no2cities[i].pollutant_avg}&emsp; | &emsp;`   
                }
                document.getElementById("api_data").innerHTML=text           
            })
        
    }
    fetchaqi()
})

document.addEventListener("DOMContentLoaded", function() {
    const carousel1 = document.getElementById('carouselExampleIndicators');
    const carousel2 = document.getElementById('carouselExampleIndicators1');
    const loader1 = carousel1.querySelector('.loader');
    const loader2 = carousel2.querySelector('.loader');

    // Show loader when transition starts
    carousel1.addEventListener('slide.bs.carousel', function () {
        loader1.style.display = 'flex'; // Show loader
    });

    carousel2.addEventListener('slide.bs.carousel', function () {
        loader2.style.display = 'flex'; // Show loader
    });

    // Hide loader when the slide transition ends
    carousel1.addEventListener('slid.bs.carousel', function () {
        loader1.style.display = 'none'; // Hide loader
    });

    carousel2.addEventListener('slid.bs.carousel', function () {
        loader2.style.display = 'none'; // Hide loader
    });
});

document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Thank you for your message! We will get back to you shortly.');
});
document.getElementById('phone').placeholder = '📞 Phone Number';
document.getElementById('email').placeholder = '✉️ E-mail';


function select(option){
    document.getElementById("btn").textContent=option
    var map_urls={
        'Fortnight':'menu/fortnight.html',
        'Month':'menu/month.html',
        'Season':'menu/season.html',
        'Year':'menu/year.html'
    }
    var iframe=document.getElementById('iframe');
    iframe.src=map_urls[option]
}

function dark(){
    
}

