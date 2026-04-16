let inputsearch = document.querySelector("#inputsearch")
let btnss=document.getElementById("btn")







var x =new Date()
var day = x.getDay()
var numday=x.getDate()
var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[day]);
 
// console.log(x.getDate());



 months=x.getMonth()
 var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];









inputsearch.addEventListener("keydown", function () {
   
    inpdata=inputsearch.value
   getApi(inpdata)
  
  
   
    
   
})



async function getApi(s) {
    var myhttp=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=86eb253f5e56488cb30172641252806&q=${s}&days=3`)

    data = await myhttp.json()

     displaydata(data)
    // console.log(allData);


}
// getApi("london")

// getApi()


function displaydata(allData){
    var cartona=``
    
        
       cartona+=` <div class="col-md-4">
                                
                                    <div class="card ">
                                        <div class="card-header d-flex justify-content-between pt-2 text-white"><p>${days[day]}</p> <p>${numday+monthNames[months]}</p></div>
                                        <div class="card-body">
                                            <h5 class="card-title">${allData.location.name}</h5>
                                            <div class="card-degree">
                                                <p>${allData.current.temp_c}</p>
                                            </div>
                                            <div class="card-icon ">
                                                <img src=${allData.current.condition.icon} alt="">
                                            </div>
                                            <p class="custom">${allData.current.condition.text}</p>
                                            <div class="card-icons-2 text-secondary pb-3">
                                                <span> <i class="fa-solid fa-umbrella fa-rotate-by" style="--fa-rotate-angle: 70deg;"></i> 20%</span>
                                                <span><i class="fa-solid fa-wind"></i> 18km/h</span>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                  <div class="col-md-4">
                                    <div class="card text-center ">
                                        <div class="card-header py-3 text-white"> ${days[day+1]}</div>
                                        <div class="card-body py-5 d-flex justify-content-center align-items-center flex-column">
                                            <img src=${allData.forecast.forecastday[1].day.condition.icon} alt="">
                                            <div class="card-degree2">
                                                <p>${allData.forecast.forecastday[1].day.avgtemp_c}</p>
                                               <span>${allData.forecast.forecastday[1].day.mintemp_c} </span>
                                            </div>
                                            
                                            <p class="custom pb-2">sunny</p>
                                          
                                        </div>
                                    </div>
                                
                            </div>
                            <div class="col-md-4">
                                    <div class="card text-center ">
                                        <div class="card-header py-3 text-white"> ${days[day+2]}</div>
                                        <div class="card-body py-5 d-flex justify-content-center align-items-center flex-column">
                                            <img src=${allData.forecast.forecastday[2].day.condition.icon} alt="">
                                            <div class="card-degree2">
                                                <p>${allData.forecast.forecastday[2].day.avgtemp_c}</p>
                                               <span>${allData.forecast.forecastday[2].day.mintemp_c}</span>
                                            </div>
                                            
                                            <p class="custom pb-2">sunny</p>
                                          
                                        </div>
                                    </div>
                                
                            </div>
               
                            `
        document.getElementById("cards").innerHTML=cartona

    }
    

const searchInput = document.getElementById("inputsearch");
const cards = document.querySelectorAll(".weather-card");

if (searchInput) {
    searchInput.addEventListener("focus", () => {
        searchInput.style.transition = "0.3s ease";
    });
}

cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});
   