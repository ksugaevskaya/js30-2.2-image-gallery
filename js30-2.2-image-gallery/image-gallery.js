const search = document.getElementById("search");
const searchImage = document.getElementById("search-image");
const images = document.getElementById("images");
const closeButton = document.getElementById("close-button");

const onPageLoad = async () => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=cats&per_page=30&orientation=landscape&client_id=GKpeWXKOcZeTtb61qbk3764RQKrD13PX8CcQnzDZO-k`
  );
  const data = await res.json();
  let i = 0;
  let string = "";
  while (i < data.results.length) {
    string = `${string}<img class="image-grid-item" src="${data.results[i].urls.regular}" alt="${data.results[i].description}">`;
    data.results[i].urls.full;
    i++;
  }

  images.innerHTML = string;
  console.log("Lupa clicked!");
};

onPageLoad();

const onSearchClicked = async () => {
  console.log(search.value);
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${search.value}&per_page=30&orientation=landscape&client_id=GKpeWXKOcZeTtb61qbk3764RQKrD13PX8CcQnzDZO-k`
  );
  const data = await res.json();
  let i = 0;
  let string = "";
  while (i < data.results.length) {
    string = `${string}<img class="image-grid-item" src="${data.results[i].urls.regular}" alt="${data.results[i].description}">`;
    data.results[i].urls.full;
    i++;
  }

  images.innerHTML = string;
  console.log("Lupa clicked!");
};

const onEnterClicked = (event) => {
  if (event.key === "Enter") {
    onSearchClicked();
  }
};

const onCloseButtonClicked = () => {
  onPageLoad();
  search.value = "";
};

searchImage.addEventListener("click", onSearchClicked);
search.addEventListener("keydown", onEnterClicked);
closeButton.addEventListener("click", onCloseButtonClicked);
