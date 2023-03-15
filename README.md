## Exercise

Display Movie data in Typescript


## Requirements 1%

1. Fork this repository [sandbox](https://codesandbox.io/p/sandbox/1-typescript-exercise-1-mthiov)
2. Change file extension from `.jsx` to  `.tsx` and update `tsconfig.json` to not allow js files.
3. Type every property in `./data/movies.json` to file `./types/movie.ts`
4. Import movie json `./data/movies.json` in `./App.tsx` file and pass it to `<Movie />` component.
5. Render out at least 5 properties in json in the `<Movie />` component.

--

## Bonus (extra 1%)


- Parent component `./App.tsx` should have an input checkbox to toggle visibility of related movies. However, the `<Movie />` component should still be able to hide related movies by itself.
  - Hint: use `useState` in both components.
- Instead of importing `.json` straight into `App` component you can use native `fetch()` function to get the `json`. Hint move data to the public folder and use `useEffect` and `useState` to help you out.
- Create a button that says `Higher resolution photo`. When the user clicks on the photo the following should happen. 
  - Get a better resolution for the movie photo by calling this url `https://img.omdbapi.com/?i=tt3896198&h=1000&apikey=35972be8`. Display the new photo instead of the one in the `movies.json`.
  - Hint you should use `useState` to store the data from the API call

------------------------------------------------------------------------------------------

## Vite + React

This is a [Vite](https://vitejs.dev) project together with React.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/main)

[Configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) has been added to optimize it for [CodeSandbox Projects](https://codesandbox.io/p/dashboard).

## Resources

- [CodeSandbox Projects — Docs](https://codesandbox.io/docs/projects)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)
- [Vite — GitHub](https://github.com/vitejs/vite)
- [Vite — Docs](https://vitejs.dev/guide/)
