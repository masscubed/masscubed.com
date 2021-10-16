# masscubed.com

Hello! You're looking at the source code for [masscubed.com](http://masscubed.com), the website for the Monash Advanced Science & Science Scholar Society (abbreviated, MASS³). Feel free to have a poke around, but you're not allowed to re-use the designs in here and claim it as your own. Have fun!

## How to use

You're probably reading this because you're a future webmaster of the committee. Do not worry. I've broken this down into sections for you.

First of all, if this is your first time using GitHub, congrats! You've stumbled your way into a whole new world of programming. To upload files manually to the "web server", you do it the `git` way:

1. Create a [GitHub](http://github.com) account
2. Ask the [previous webmaster](http://hanskek.com) to add you as a member to this page
3. Get a [Git Client](https://desktop.github.com)
4. Clone this repository (this downloads everything to your computer)
5. Make some changes
6. Add, Commit and Push (this uploads your changes)
7. Repeat steps 5 & 6, then profit $$$


## How it works

This GitHub repo is organised into a few main parts. Namely:

### The Main Site
- `index.html`
- `/assets`
- `/about`
- `/committee`
- `/events`

Just static `html`, `css` and `js` files, sprinkled with some images all within the `/assets` folder. Nothing fancy here, and what you see is what you get. Future webmaster, feel free to redesign these when you want to.

### The News Site

- `/_includes`
- `/_layouts`
- `/_posts`
- `/_uploads`
- `/monthly`
- `_config.yml`

The news site is generated using [Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com) (a nice intro video tutorial [can be found here](https://www.youtube.com/watch?v=nN6QuNqmAwk)). Basically, the files for the news site is organised in a way such that GitHub _parses_ through all the files with an underscore (e.g. `_layouts`) or with the file extension `.markdown` and generates a blogging website. It's a better alternative to using WordPress or any other third-party solution.

If you want to publish posts, upload images, or tweak a little of the news site's content, I suggest you login using the secret credentials on [Siteleaf](http://manage.siteleaf.com).

If you want to modify any of the files, I recommend learning a little bit about Jekyll yourself. Otherwise, have at thee!

### The Leftovers

- `.gitignore` — all the folders listed in .gitignore aren't tracked to the GitHub repo
- `CNAME` — used for the domain name
- `readme.markdown` — this how-to file


## Fixing Issues

It's like a to-do list but for programmers. Seriously. Go to the Issues Tab above (or [click here](/issues)) and browse for any pending todos regarding this entire website. There may be bugs on the news site, fonts missing, or just general DEFCON-5 stuff. When you've fixed an issue in the code, mark it as completed.
