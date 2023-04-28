# Click to copy [website/PWA](https://s-weigand.github.io/dev-emoji-page/) for emoji I often used in commits, issues and PRs

I just got annoyed by copy-pasting emojis manually and each time dragging a markdown file
which was on my desktop in my editor to do so.

I like emojis in commit messages since it provides me with a quick visual diff what changed where...
but ofc. that is up to taste and might even cause issues on some systems depending on the font and render engine (we got 2021+ so yeah).

# Make it your own

To make it your own, you can simply:

- Fork this repo
- Replace `config.gh_handle` in `package.json` with your handle
- Change the [`iconList`](./src/ts/iconList.ts)
- Push it to your `main` branch and wait for the CI to deploy you gh-pages

# Development

1. Clone your fork
1. Install the dependencies (`npm ci`)
1. Run the parcel dev server (`npm run dev`)

## Windows

For the build scripts tp properly work on windows you need to use WSL2 or
[set git bash as `script-shell` for `npm`](https://stackoverflow.com/a/46006249/3990615)

## Credits

This use of emojis is inspired by

- [allcontributors](https://allcontributors.org/docs/en/emoji-key)
- [executablebooks](https://executablebooks.org/en/latest/contributing.html#commit-messages)
