const testimonyData = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.npoint.io/5845c944a9beb4f216b7", true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("error loading Data!");
      }
    };
    xhr.onerror = () => {
      reject("Network Error!!");
    };
    xhr.send();
  });
  
  async function getAllTestimonials() {
    try {
      const response = await testimonyData;
      console.log(response);
  
      let testimonialHTML = "";
      response.forEach((item) => {
        testimonialHTML += `<div class="card">
              <div class="upper">
                  <img style="width:250px" src="${item.image}" alt="">
              </div>
                  <div class="content">
                      <p class="quotes"><i>" ${item.quote}"</i></p>
                      <p class="authors"style="text-align: right">-${item.author} -</p>
                      <p class="authors"style="text-align: right">${item.rating} <i style="color: orange;" class="fa-solid fa-star"></i></p>
                  </div>
          </div>`;
      });
      document.getElementById("testimonials").innerHTML = testimonialHTML;
    } catch (err) {
      console.log(err);
    }
  }
  getAllTestimonials();
  
  async function getFilteredTestimonial(rating) {
    const responseFiltered = await testimonyData;
    let testimonialHTML = "";
    const testimonialFiltered = responseFiltered.filter((item) => {
      return item.rating === rating;
    });
    if (testimonialFiltered.length === 0) {
      console.log(testimonialFiltered);
      testimonialHTML += `<h1> Data not Found </h1>`;
    } else {
      testimonialFiltered.forEach((item) => {
        testimonialHTML += `<div class="card">
              <div class="upper">
                  <img style="width:250px" src="${item.image}" alt="">
              </div>
                  <div class="content">
                      <p class="quotes"><i>" ${item.quote}"</i></p>
                      <p class="authors"style="text-align: right">-${item.author} -</p>
                      <p class="authors"style="text-align: right">${item.rating} <i style="color: orange;" class="fa-solid fa-star"></i></p>
                  </div>
            </div>`;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  