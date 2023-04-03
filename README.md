## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


About my project, for each completed step, I made corresponding commits.

I developed the project in Next.js with TypeScript, also using React-Query for HTTPS requests and Styled-Components for styling the entire project. I wanted to use Yup to validate inputs, but I couldn't implement it in the project's development time.

I decided to create a basic layout using a template, where there is a fixed (and responsive) menu and I render the pages with the content as "children". On all pages, there is a header where it's possible to paginate and search for desired characters, locations, or episodes, as well as the functionality of sorting the data being shown on the screen. I also added the option to favorite characters, locations, or episodes from all screens, and the project is fully responsive.

Features:
Due to a date confusion, I couldn't implement the functionality of a favorites page where I could see all the favorited items.

I added a switch theme to toggle between the Dark and Normal themes.

I would have liked to implement more filters on the pages, such as filtering characters by species, gender, or status, following the data flow of each of the pages.
