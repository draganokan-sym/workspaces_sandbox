example monorepo using [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), with two CRA apps having a shared lib.

### local dev

run `yarn install` at the root of monorepo to setup for local dev. that's it!

other available scripts to run apps:

- `yarn app1` - runs the first app (or go to `app1` and run `yarn start`)
- `yarn app2` - runs the second app (or go to `app2` and run `yarn start`)

### test monorepo setup

make changes to something in `apps-shared` and see those changes immediately reflected in your code editor and running apps, without any additional updates, pulls or installs.

works with TS types, React components, pure JS, SASS.

### notes

notable things from when this monorepo was being set up:

- workspaces are configured in the root `package.json` (just that one `workspaces` property)
- `app1` and `app2` were first initialized by running standard CRA (`yarn create react-app --template typescript`)
- `app1` and `app2` use `react-app-rewired` to allow Babel to compile TS files outside their respective `src/` folders
- `tsconfig.json` and `package.json` in `apps-shared` have some extra fields that make it actually work (`composite: true`, `outDir`, `rootDir`, `exports`)

---

popular alternative for managing monorepos - https://github.com/lerna/lerna (wrapper with various scripts, but uses yarn/npm workspaces under the hood).
