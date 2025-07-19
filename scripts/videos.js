document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    { title: "kutotesa", url: "../Media/videos/001.mp4" },
    { title: "kutotesa", url: "../Media/videos/002.mp4" },
    { title: "kutotesa", url: "../Media/videos/003.mp4" },
    { title: "kutotesa", url: "../Media/videos/004.mp4" },
    { title: "kutotesa", url: "../Media/videos/005.mp4" },
    { title: "kutotesa", url: "../Media/videos/006.mp4" },
    { title: "kutotesa", url: "../Media/videos/007.mp4" },
    { title: "kutotesa", url: "../Media/videos/008.mp4" },
    { title: "kutotesa", url: "../Media/videos/009.mp4" },
    { title: "kutotesa", url: "../Media/videos/010.mp4" },
  ];

  let index = 0;
  const perPage = 4;
  const maxVideos = 16;
  const container = document.getElementById("videoSection");

  function loadVideos() {
    if (!container) return;

    const end = Math.min(index + perPage, maxVideos);
    const slice = videos.slice(index, end);

    slice.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <video controls muted width="100%">
          <source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-title">${video.title}</div>
      `;
      container.appendChild(card);
    });

    index += perPage;
  }

  // Initial load
  loadVideos();

  // Load more on scroll (until max 16)
  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
      if (index < maxVideos) {
        loadVideos();
      }
    }
  });
});
