function showActorDetails(actor) {
    document.getElementById("actor-image").innerHTML = `<img src="${actor.image_url}" alt="${actor.name}" />`;
    
    document.getElementById("actor-name").textContent = actor.name;
    
    document.getElementById("actor-movies").innerHTML = `
      <strong>Total Movies:</strong> ${actor.total_movies} <br>
      <strong>Notable Films:</strong> <ul>${actor.films.map(film => `<li>${film}</li>`).join('')}</ul>
    `;
  }
  
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      populateActorList(data.actors);
      if (data.actors.length > 0) {
        showActorDetails(data.actors[0]); 
      }
    })
    .catch(error => {
      console.error('Error loading the JSON data:', error);
    });
  
  function populateActorList(actors) {
    const listElement = document.getElementById("list");
  
   
    actors.forEach(actor => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
listItem.textContent = actor.name + ", " + actor.films.length;

  
      listItem.addEventListener("click", () => showActorDetails(actor));
  
      listElement.appendChild(listItem);

    });
  }
  