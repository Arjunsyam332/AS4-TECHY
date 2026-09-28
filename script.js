const videos = [
  {
    id: "MvfjORailN0",
    title: "AS4 TECHY Video 1",
    description: "YouTube video description will appear here."
  },
  {
    id: "SSbBmWQVkzw",
    title: "AS4 TECHY Video 2",
    description: "YouTube video description will appear here."
  },
  {
    id: "63DMSB0PjHo",
    title: "AS4 TECHY Video 3",
    description: "YouTube video description will appear here."
  }
];

const container = document.getElementById("videos");

videos.forEach((video, index) => {

  const card = document.createElement("article");

  card.className = "card";
  card.style.animationDelay = `${index * .15}s`;

  card.innerHTML = `
    <div class="thumbnail-wrap" data-index="${index}">
      <img
        class="thumbnail"
        src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg"
        alt="${video.title}">
    </div>

    <h3>${video.title}</h3>

    <a
      class="visit-btn"
      href="https://www.youtube.com/watch?v=${video.id}"
      target="_blank">
      Visit Video →
    </a>
  `;

  container.appendChild(card);
});


/* MENU */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});


/* VIDEO POPUP */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".thumbnail-wrap").forEach(item => {

  item.addEventListener("click", () => {

    const video = videos[item.dataset.index];

    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;

    modalLink.href =
      `https://www.youtube.com/watch?v=${video.id}`;

    modal.classList.add("show");
  });

});


document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
