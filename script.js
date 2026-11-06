(() => {
  const body = document.body;
  const toggle = document.querySelector(".theme-toggle");
  const year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  function setTheme(theme) {
    const isDark = theme === "dark";
    body.classList.toggle("dark", isDark);

    if (toggle) {
      toggle.textContent = isDark ? "Light mode" : "Dark mode";
      toggle.setAttribute("aria-pressed", String(isDark));
    }

    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("mist-gb-theme");
  } catch (_) {
    // The page still works if browser storage is unavailable.
  }

  setTheme(savedTheme === "dark" ? "dark" : "light");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = body.classList.contains("dark") ? "light" : "dark";
      setTheme(nextTheme);
      try {
        localStorage.setItem("mist-gb-theme", nextTheme);
      } catch (_) {
        // Theme switching remains available for this page view.
      }
    });
  }

  const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS : [];
  const postList = document.getElementById("post-list");

  if (postList) {
    if (posts.length === 0) {
      postList.innerHTML = '<p class="empty-state">No posts yet.</p>';
    } else {
      const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
      postList.innerHTML = sortedPosts.map(post => `
        <a class="post-list-item" href="post.html?slug=${encodeURIComponent(post.slug)}">
          <span class="post-list-title">${escapeHTML(post.title)}</span>
          <time class="post-meta" datetime="${escapeHTML(post.date)}">${formatDate(post.date)}</time>
        </a>
      `).join("");
    }
  }

  const postContainer = document.getElementById("post");
  if (postContainer) {
    const slug = new URLSearchParams(window.location.search).get("slug");
    const post = posts.find(item => item.slug === slug);

    if (!post) {
      postContainer.innerHTML = `
        <h1>Post not found</h1>
        <p class="post-content">This post may have moved or may not exist.</p>
        <div class="post-divider" aria-hidden="true"><span></span><span></span><span></span></div>
      `;
      document.title = "Post not found | Sandro Brincher";
    } else {
      postContainer.innerHTML = `
        <h1>${escapeHTML(post.title)}</h1>
        <div class="post-byline">by Sandro Brincher</div>
        <div class="post-date">${formatDate(post.date)}</div>
        <div class="post-content">${post.content}</div>
        <div class="post-divider" aria-hidden="true"><span></span><span></span><span></span></div>
      `;
      document.title = `${post.title} | Sandro Brincher`;
    }
  }

  function formatDate(isoDate) {
    const date = new Date(`${isoDate}T12:00:00`);
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }
})();
