// class testimonials {
//     constructor(quote, image){
//         this._quotes
//         this._image
//     }

//     get quote() {
//         return this._quotes
//     }

//     get image() {
//         return this._image
//     }

//     get html() {
//         return <div class="testimonials">
//             <img src="${this.image}" class="profil-testimoni" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">"${this.author}"</p>
//         </div>
//     }
// }
 
// class authorTestimoni extends testimonials {
//     constructor(author,quote,image) {
//         super(quote,image)
//         this._author = author
//     }
//     get author() {
//         return this._author
//     }
// }

// class companyTestimoni extends testimonials {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }

//     get author() {
//         return this._company + " company"
//     }
// }

// const testimoni1 = new authorTestimoni("anandyo","mainnya hebat", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

// const testimoni2 = new authorTestimoni("ananto","perhatikan map", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

// const testimoni3 = new authorTestimoni("ronaldo","cetak hattrick", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

// let testimonidata = [testimoni1, testimoni2, testimoni3]
// let testimoniHTML = "";

// for (let i = 0; i < testimonidata.length; i++) {
//     testimoniHTML += testimonidata[i].html
// }
// document.getElementById("testimonials").innerHTML =testimoniHTML

const testimonidata =[
    {
        author: "anendyo",
        quote: "mantap, tingkatkan terus bro",
        image: "https://images.unsplash.com/photo-1677529459036-f1792274499b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        rating: 5
    },
    {
        author: "ronaldo",
        quote: "tidak sesuai ekpektasi",
        image: "https://images.unsplash.com/photo-1677686080021-65553a55b02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        rating: 1
    },
    {
        author: "waluyo",
        quote: "sumpah keren banget cuy",
        image: "https://plus.unsplash.com/premium_photo-1676486613305-c16d423c8b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        rating: 4
    },
]

function allTestimonials() {
    let testimoniHTML = '';

    testimonidata.forEach((item) => {
        testimoniHTML += `<div class="testimonial">
        <img src="${item.image}" class="profil-testimoni" />
        <p class="quote">"${item.quote}"</p>
        <p class="author">${item.author}</p>
        <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
    })

    document.getElementById('testimonials').innerHTML = testimoniHTML;
}

allTestimonials()

function filterTestimonials(rating) {
    let testimoniHTML = '';

    const testimoniFilter = testimonidata.filter((item) => {
        return item.rating === rating
    })

    if (testimoniFilter.length === 0) {
        testimoniHTML = `<h1> data not found! </h1>`
    } else {
        testimoniFilter.forEach((item) => {
            testimoniHTML += `<div class="testimonial">
            <img src="${item.image}" class="profil-testimoni" />
        <p class="quote">"${item.quote}"</p>
        <p class="author">${item.author}</p>
        <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
        </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimoniHTML
}