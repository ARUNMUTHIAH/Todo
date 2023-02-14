# Project Name

	Project description.

## Keys

* A short list of things to understand the package, better.

## Notes

* Though pnpm is the preferred package manager, package-lock is still kept to widen support.

## Usage
### Setup
#### Linux / Mac
```sh
$ git clone https://github.com/Laufire/react-starter.git project-name
$ cd project-name
$ sh ./adopt.sh
$ sh ./setup.sh
```

#### Windows
```sh
C:\> git clone https://github.com/Laufire/react-starter.git project-name
C:\> cd project-name
C:\> .\adopt.bat
```

### Development
#### Linux, Windows & Mac
```
$ # Run all tests.
$  pnpm run test-dev

$ # Run a particular test (matching the given pattern).
$ pnpm run test-dev -- --testPathPattern "target"

$ # Run all tests with coverage.
$  pnpm run test-ci
```

## ToDo

* Have branches to allow for multiple templates.
	* One for a clean one to start new projects.
	* One with basic examples.

* Audit the packages. It's not done, yet. Due to poor understanding of the dependencies.

* Try moving away from create-react-app, as it introduces a lot of constraints, including reconfiguring jest.

* Think of replacing npm with pnpm.

two object in state (todo,inputValue)
input component we want to type some text that text will be stored in target.value
and give that value to inputValue in state
add btn comp we want to store the data into todo in state spread the todo and merge  the inputValue.


map the todo array and give the value to delete comp.
delete comp



