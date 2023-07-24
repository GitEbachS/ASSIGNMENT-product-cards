
const rugs = [
  {
    id: 1,
    name: 'Asian Rug',
    image: "https://images.rugimg.com/cream-8x11-aditi-rug/3123582/3123582_image_1010.jpg?width=720&quality=55&height=1008&fit=bounds",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '4 feet by 10 feet',
    weight: '12 lbs',
    date: 'Specifications valid until 09/23/2023',
    pricing1: '$400',
    pricing2: '$500',
    pricing3: '$800'
  },
  {
    id: 2,
    name: 'Asian Rug',
    image: "https://assets.wfcdn.com/im/70992012/resize-h255%5Ecompr-r85/2247/224740998/Shyann+Performance+Dark+Blue%2C%2FLight+Blue%2FWhite+Rug.jpg",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '4 feet by 12 feet',
    weight: '30 lbs',
    date: 'Specifications valid until 09/27/2023',
    pricing1: '$400',
    pricing2: '$600',
    pricing3: '$800'
  },
  {
    id: 3,
    name: 'Korean Rug',
    image: "https://assets.wfcdn.com/im/34771635/resize-h255%5Ecompr-r85/2187/218755341/Skye+Performance+Terracotta%2FBlue%2FSage+Green%2FOrange+Rug.jpg",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '40 feet by 12 feet',
    weight: '40 lbs',
    date: 'Specifications valid until 09/30/2023',
    pricing1: '$400',
    pricing2: '$600',
    pricing3: '$900'
  },
  {
    id: 4,
    name: 'Indian Rug',
    image: "https://assets.wfcdn.com/im/37135546/resize-h255%5Ecompr-r85/1298/129862209/Performance+Brown+Rug.jpg",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '10 feet by 12 feet',
    weight: '40 lbs',
    date: 'Specifications valid until 09/30/2023',
    pricing1: '$200',
    pricing2: '$600',
    pricing3: '$900'
  },
  {
    id: 5,
    name: 'Persian Rug',
    image: "https://assets.wfcdn.com/im/28711683/resize-h255%5Ecompr-r85/6164/61646144/Calvo+Charcoal%2FLight+Beige+Rug.jpg",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '10 feet by 10 feet',
    weight: '45 lbs',
    date: 'Specifications valid until 10/01/2023',
    pricing1: '$200',
    pricing2: '$700',
    pricing3: '$900'
  },
  {
    id: 6,
    name: 'Asian Rug',
    image: "https://assets.wfcdn.com/im/86329737/resize-h255%5Ecompr-r85/6910/69109221/Hoekstra+Blue%2FBeige%2FTan%2FLight+Gray+Rug.jpg",
    description: 'Colors in this rug include: Multi, Blue, Gold, Gray, Green, Navy Blue, Orange, Peach, Purple, Red, Yellow, Pink',
    available: true,
    size: '12 feet by 12 feet',
    weight: '50 lbs',
    date: 'Specifications valid until 10/01/2023',
    pricing1: '$200',
    pricing2: '$600',
    pricing3: '$900'
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
const cardsOnDom = (array) => {
  let domString = "";
  for (const rug of rugs) {
    domString +=`
    <div class="card ${rug.id}">
    <img src="${rug.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${rug.name}</h5>
      <p class="card-text justify">${rug.description}</p>
      <p class="card-grey">  ${rug.available ? "Available" : "Not Available"}</p>
    </div>
    <p class="card-text specbold">Specifications</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Size: ${rug.size}</li>
      <li class="list-group-item">Weight:${rug.weight}</li>
      <li class="list-group-item">${rug.date}</li>
      <li class="list-group-item pricing">Price:</li>
      <li class="list-group-item">${rug.pricing1}</li>
      <li class="list-group-item">${rug.pricing2}</li>
      <li class="list-group-item">${rug.pricing3}</li>
    </ul>
  </div>`;
  }


  renderToDom("#app", domString);
}

const rugForm = () => {
  let domString = "";
  domString += `
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="image" class="form-label">ImageUrl:</label>
      <input type="Url" class="form-control" id="image" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description:</label>
      <input type="text" class="form-control" id="description" aria-describedby="emailHelp">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="available">
      <label class="form-check-label" for="available">Available</label>
    </div>
    <div class="mb-3">
      <label for="size" class="form-label">Size:</label>
      <input type="text" class="form-control" id="size" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="weight" class="form-label">Weight:</label>
      <input type="text" class="form-control" id="weight" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">Availability Date:</label>
      <input type="text" class="form-control" id="date" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="pricing1" class="form-label">Price:</label>
      <input type="text" class="form-control" id="pricing1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="pricing2" class="form-label">Price:</label>
      <input type="text" class="form-control" id="pricing2" aria-describedby="emailHelp">
    </div>
  <div class="mb-3">
    <label for="pricing3" class="form-label">Price:</label>
    <input type="text" class="form-control" id="pricing3" aria-describedby="emailHelp">
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>`;

 renderToDom("#formContainer", domString)

};

const form = document.querySelector("#formContainer")

const formButton = document.querySelector("#formBtn")



const createRugs = (e) => {
  e.preventDefault();

  const rugObj = {
    id: rugs.length + 1,
    name: document.querySelector('#name').value,
    description: document.querySelector('#description').value,
    image: document.querySelector('#image').value,
    available: document.querySelector('#available').checked,
    size: document.querySelector('#size').value,
    weight: document.querySelector('#weight').value,
    date: document.querySelector('#date').value,
    pricing1: document.querySelector('#pricing1').value,
    pricing2: document.querySelector('#pricing2').value,
    pricing3: document.querySelector('#pricing3').value
  }
  rugs.push(rugObj)
  cardsOnDom(rugs)
  form.reset();
}

form.addEventListener('submit', createRugs);

const eventListeners = () => {
  formButton.addEventListener('click', () => {
    rugForm();
  })
}

const startApp = () => {
  cardsOnDom(rugs)
  eventListeners();
}


startApp();
