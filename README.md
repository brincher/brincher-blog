# Mist GB personal blog

A small static blog for GitHub Pages. It uses plain HTML, CSS, and JavaScript.

## Files

- `index.html`: homepage and post index
- `post.html`: shared template for every individual post
- `styles.css`: layout, Mondrian-inspired composition, and Mist GB colors
- `script.js`: theme toggle and post rendering
- `posts.js`: post titles, dates, and content

## Add a post

Open `posts.js` and add another object inside `window.BLOG_POSTS`:

```js
{
  slug: "my-new-post",
  title: "My new post",
  date: "2026-11-10",
  content: `
    <p>The first paragraph of my new post.</p>
    <p>The second paragraph.</p>
  `
}
```

Use a unique, URL-friendly `slug`, and write the date as `YYYY-MM-DD`.
The post will automatically appear on the homepage and will be available at:

`post.html?slug=my-new-post`

The `content` field accepts HTML. Since it is inserted as HTML, only put trusted content that you wrote or have checked.

## Run locally

Open `index.html` in a browser. For a more realistic local preview, you can also use a simple local static server.

## Publish with GitHub Pages

1. Push these files to your GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your publishing branch (usually `main`) and the root (`/`) folder.
5. Save. GitHub Pages will publish the site.

## Mist GB palette

- Brown: `#2d1b00`
- Blue: `#1e606e`
- Green: `#5ab9a8`
- Mint: `#c4f0c2`

Light mode uses mint as the background and brown as the text color.
Dark mode reverses those two. The 36 × 4 px divider uses the other three
palette colors, in 12 × 4 px segments.
