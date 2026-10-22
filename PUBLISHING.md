# Publishing Moonspell Themes

**Use GitHub for normal releases. You do not need to build or publish locally.**

## Current scripts

| Command | What it does |
| --- | --- |
| `npm run generate` | Generates all theme JSON files once and updates the theme list in `package.json`. |
| `npm run dev` | Generates themes on startup and again when watched TypeScript files change. |
| `npm run build` | Creates `moonspell-themes.vsix`, which is necessary for the Marketplace publishing.  Do not run this locally, this is included in the Github action |
| `npm run publish` | Packages and publishes files to the Marketplace.  Do not use this locally, this is meant to be run during the GitHub Action. Does not generate themes or bump the version. |

Run `npm install` first if dependencies are not installed.

`generate` runs every top-level `src/theme-*.ts` file and writes its JSON output to the matching `themes/theme-*.json` file. This covers all nine current themes. It then deletes JSON files with no matching source and refreshes `package.json`'s theme registrations. New themes must follow the same filename pattern and print JSON to stdout.

Generation errors are logged but currently do not set a failing exit code. Look for `package.json updated successfully with themes.` and stop if any errors appear.

## Step by step

1. Make your theme or README changes.
2. If theme code changed, run `npm run generate`. Stop if it reports errors. Commit the generated `themes/` files too; CI does not generate them.
3. Bump the Marketplace version using one command below. This updates `package.json` and the lockfile without creating a commit or Git tag.

   | Release | Command |
   | --- | --- |
   | Small fix | `npm version patch --no-git-tag-version` |
   | New features | `npm version minor --no-git-tag-version` |
   | Major changes | `npm version major --no-git-tag-version` |

4. Commit the changed files. Include the matching keyword in your commit message, for example `Fix theme colors #patch`. When squash-merging, include it in the final squash commit message.
5. Push or merge to `main`. GitHub packages and publishes automatically using its `VSCE_TOKEN` secret, then attempts to create a Git tag.
6. Check the **Publish** step in [GitHub Actions](https://github.com/ElvannAbendroth/moonspell-themes/actions), then the version in the [Marketplace dashboard](https://marketplace.visualstudio.com/manage/publishers/oodri/extensions/moonspell-themes/hub).

## Your tagging keywords

These go in **commit messages**, not in manually created Git tags.

| Keyword | Git tag result, assuming the previous tag is `0.1.4` |
| --- | --- |
| `#patch` | `0.1.5` |
| `#minor` | `0.2.0` |
| `#major` | `1.0.0` |
| `#none` or no keyword | No tag bump with your current settings. |

**Tags do not set the Marketplace version.** Publishing runs before tagging and uses `package.json`. Use both the version command and the matching keyword if you want them aligned; that assumes the previous Git tag and package version already match.

**`#none` does not prevent publishing.** Every push to `main` attempts publishing. An existing Marketplace version is skipped by `--skip-duplicate`, so unchanged versions do not upload new content, even README edits.

Pushing a Git tag alone does not trigger this workflow. Pushes to other branches do not trigger it either, but closing a PR targeting `main` does, even without merging. A merge can trigger two runs.

Tagging caveat: the tag job currently uses the retired `ubuntu-20.04` runner. It may fail independently after a successful publish. These keywords describe the action's rules, not a guarantee that the current tag job succeeds.

## Should I run `npm run publish` locally?

**Usually, no. Let GitHub handle releases.** The action calls `vsce publish` directly; the npm script is a manual alternative, not a required release step.

Running it locally packages and uploads your current local files immediately, including uncommitted edits, using the current `package.json` version. It needs local authentication, such as an exported `VSCE_PAT`. It does not bump versions, create Git tags, or push to GitHub.

Use it only for a deliberate manual release. No prior `npm run build` is needed. Commit and push the same files and version afterward; CI will skip that already-published version.