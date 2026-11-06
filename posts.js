/*
  Add new posts to this array.

  Each post needs:
  - slug: URL-friendly identifier, unique for each post
  - title: post title
  - date: publication date in YYYY-MM-DD format
  - content: HTML for the post body

  Keep content HTML authored by you. The template inserts it as HTML.
*/

window.BLOG_POSTS = [
  {
    slug: "first-post",
    title: "A first post",
    date: "2026-11-06",
    content: `
      <p>This is the first post in the blog. Replace this paragraph with your own writing.</p>

      <p>You can add as many paragraphs as you need. The post layout, typography,
      colors, and divider are shared by every post.</p>

      <h2>A section heading</h2>

      <p>You can also use <em>italics</em>, <strong>bold text</strong>,
      <a href="https://example.com">links</a>, and block quotations.</p>

      <blockquote>
        <p>A quotation can go here.</p>
      </blockquote>
    `
  },
  {
    slug: "another-note",
    title: "Another note",
    date: "2026-10-20",
    content: `
      <p>This is a second example post. To publish your own, duplicate this
      object, change its slug, title, date, and content, and save the file.</p>
    `
  }
];
