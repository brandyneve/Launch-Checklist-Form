window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      
      if (pilotName.value === "" || coPilotName.value === "" ||fuelLevel.value === "" ||cargoMass.value === ""){
         window.alert("slow your roll hippy, All fields are required!")
      } else if (!isNaN(pilotName.value) || !isNaN(coPilotName.value)){
         window.alert("Hey buddy, names shouldn't have numbers.... stick to letters. 7of9, your opinion is not wanted here.")
      }  else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         window.alert("hey buddy, this should be a numeric value")
      }  
      /*let inputArray = [pilotName, coPilotName, fuelLevel, cargoMass];
      for (i =0; i<inputArray.length; i++){
         if (inputArray[i].value === "" ){
            window.alert("All fields are required!");
            //we need to check that each of these is filled in, and is the correct type of input, so that first statement will work for the if blank, but we want to also do a type of check. 
            // stop the form submission
         };
      };*/
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus= document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      //fuel bad cargo bad //
      if (Number(cargoMass.value)>10000 && Number(fuelLevel.value)<10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-pilot ${coPilotName.value} is ready to launch`;
         fuelStatus.innerHTML = "Fuel level too low to launch";
         cargoStatus.innerHTML = "Cargo mass too high for launch"
      

      }  
      //fuel bad cargo good 
     else if (Number(fuelLevel.value)<10000 && Number(cargoMass.value)< 10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-pilot ${coPilotName.value} is ready to launch`;
         fuelStatus.innerHTML = "Fuel level too low to launch";
         cargoStatus.innerHTML = "Cargo mass low enough for launch"
      }
      //fuel good cargo bad
      else if (Number(fuelLevel.value)>= 10000 && Number(cargoMass.value)> 10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML=`Co-pilot ${coPilotName.value} is ready to launch`;
         fuelStatus.innerHTML = "Fuel level high enough to launch";
         cargoStatus.innerHTML = "Cargo mass low enough for launch"
      }
      else{
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green"
      }

           
         
      
   });            
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
           response.json().then(function(json){;
       
          const missionTarget = document.getElementById("missionTarget");
          missionTarget.innerHTML =`
          <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src=${json[0].image} height=250></img>`
       })
      })    
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

