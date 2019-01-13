# String Calculator Kata
*Completed using Python 3*

# Acceptance Criteria

Create an `add` function that calculates the sum when given a string of numbers. It should be able to perform the following:
 * Calculate the sum when given:
    * An empty string, `""` should return `0`.
    * A string with multiple numbers, `"1,2,3,4,5"` should return `15`.
 * The `add` function should allow for comma or new line delimiters. Examples:
     * `1,2,3,4,5` should return `15`.
     * `1\\n2\\n3\\n4\\n5` should return `15`.
     * `1,2,3,4\\n5` should return `15`.
 * The `add` function should throw an exception when provided with negative numbers. Negative numbers should be present in message.
 * The `add` function should exclude any number greater than `1000`.
 
# Setup Development Environment
It is recommended to setup a virtual Python environment using `Pyenv`. This prevents your development environments from colliding when working with multiple Python versions.

## Pyenv
- Follow [docs](https://github.com/pyenv/pyenv) to install Pyenv.
- Ensure the following commands were run:
```
brew install pyenv
brew install pyenv-virtualenv
```

## Steps to Configure
* Install Python on Pyenv by running `pyenv install 3.6.1`
* Create environment by running: `pyenv virtualenv 3.6.1 string_calculator_env`. This command format is `pyenv virtualenv <python_version> <environment_name>`
* To activate environment do one of the following:
    * Within the directory, type `pyenv activate string_calculator_env`
    * Create a file name `.python-version' with the environment name, `string_calculator_env` inside. This will activate whenever the directory is opened. 
* Ensure that either your `.bash_profile` or `.zshrc` (if using ZShell) contains this content:
```
eval "$(pyenv init -)"
```
This command will ensure that your Python version changes when activating.
