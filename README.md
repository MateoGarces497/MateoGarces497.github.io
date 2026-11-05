# Portfolio

Personal portfolio site, hosted with GitHub Pages at https://mateogarces497.github.io

## Structure

```
MateoGarces497.github.io/
├── index.html                  Main page (about, links, projects, resume)
├── css/
│   └── style.css               All styling; change --accent to re-theme
├── js/
│   └── main.js                 Project category filter + footer year
├── projects/
│   └── project-template.html   Copy this for each new project
├── assets/
│   ├── resume.pdf              Your resume (add this)
│   ├── images/                 Headshot and project images (add these)
│   └── files/                  Reports, decks, spreadsheets (optional)
└── README.md
```

## Adding a project

1. Copy `projects/project-template.html` to `projects/your-project-name.html`.
2. Edit the text and image paths.
3. In `index.html`, copy one `<article class="card">` block, set `data-category`
   (`engineering`, `finance`, or `art`), and point its link at the new page.
