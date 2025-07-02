[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# ICS API

## Overview

The ICS (IQB coding service) repository defines the HTTP API specifications for coding services within the IQB (Institute for Educational Quality Improvement) software ecosystem. It aims to standardize communication protocols between frontends and various coding services.

In contains corresponding interfaces for typescript and models for Python.

## Documentation

![taskflow](https://raw.githubusercontent.com/iqb-specifications/coding-service/refs/heads/main/docs/taskflow.svg)

Comprehensive API documentation is available at: https://iqb-specifications.github.io/coding-service/

## Usage of interfaces and models

### Typescript
The Typescript interfaces (and tehir typeguards) can be obtained with NPM (https://www.npmjs.com/package/iqbspecs-coding-service).

### Python
Their Python counterparts are not (yet) published at pypi, so in order to use them, clone this repository as submodule and install them locally:
```
pip install -e coding-service/src/python/ics_models
```
