# [RPGMOBOB.com](https://rpgmobob.com)

A website dedicated to all things [RPG MO](https://mo.ee), developed by player "bobdylan" (no relation to the singer, just a fan) and recently re-written in AstroJS and published here for the community to contribute.

Note: Currently the fruits of the repository live at [beta.rpgmobob.com](https://beta.rpgmobob.com). Once I get enough feedback that things work well enough, I will move it to "www".

## Dependencies/What's Used

- [Node](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [AstroJS](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [ReactJS](https://react.dev/)
- [Radix](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [FSLightbox](https://fslightbox.com/)
- [Lucide](https://lucide.dev/) & [Radix](https://www.radix-ui.com/icons) Icons

## Contributing

This is a first-attempt guide at how to contribute. Any RPGMOers that are familiar with Git & Github are welcome to help improve on this section particularly! 😉

### Requirements

All contributions needs to come through Github Pull Requests (PRs.) There are (at least) 2 ways to do this:

#### Edit on GitHub

You can simply [fork this repository](https://github.com/thomporter/rpgmobob.com/fork), which will create a copy of it under your account. Use Github's editor to edit files, commit them, and submit a PR.

#### Local Developement

You will need NodeJS installed, I highly recommend using NVM (Node Version manager) on either [Linux](https://github.com/nvm-sh/nvm) or [Windows](https://github.com/coreybutler/nvm-windows). Mac users have something similar, brew I believe? Someone buy me a Mac so I can learn and teach you. :)

You will need an IDE of some sort. I use [VSCode](https://code.visualstudio.com/), and this repo includes extension recommendations for it, but you are free to use whatever you are comfortable with.

Familiarity with HTML, CSS & Javascript as well as AstroJS, React and Tailwind will be helpful, but not necessarily required (keep reading...)

Once ready, you first need to [fork this repo](https://github.com/thomporter/rpgmobob.com/fork) and clone your copy to your local machine. Edit files, commit changes, and push them back up to your repo. Then create a PR on GitHub. Something like this to get started:

```cmd
git clone yourGithubUsername/rpgmobob.com
cd rpgmobob.com
pnpm i
pnpm dev
```

At this point you can go to http://localhost:4321 and see your local copy running. Edit files, and it will (usually) refresh automagically!

Once you edit a file or files, you can ues Git to commit your changes, and then push it back up to Github.

```
git commit -a -m "A brief  message about your commit"
git push origin master
```

The above would commit ALL files you've modified, and tag them with the message you include in double quotes. The next line will push the changes from your local machine back up to Github. Now you can go to your repo on Github and submit a PR.

### Project Structure

- `public` - Anything in here can be found directly on the website and will be published as is. The most interesting thing in here at the moment is the img/mods folder, which holds PNG files for each of the mods used to do the random swapping on the site's navigation.
- `src`:
  - `components` - Contains components (mostly React) that are used either in the layout or in other pages.
  - `layouts` - Only one layout for now, but anything is possible.
  - `lib` - Think of this as the database. Typescript files here are mostly arrays filled with human-readable data that can be easily edited to change the content on the site.
  - `pages` - As you'd expect, every page on the site has a file in here. Many of them simply include a React component to render data.
