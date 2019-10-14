# email-whitelist

Utilities to validate/ensure email safety against an email whitelist. 👮‍📧

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Testing](#testing)
- [License](#license)

## Requirements

- `node -v` >= 10.15.3
- `npm -v` >= 6.4.1

## Installation

```console
$ npm install furey/email-whitelist#semver:^v1
```

## Usage

```JavaScript
// example.js

const { isSafeEmail, ensureSafeEmail } = require('email-whitelist')

/**
 * Assuming the following `process.env` variables are set…
 * 
 * - EMAIL_WHITELIST=me@personal-domain.com,@work-domain.com
 * - EMAIL_DEFAULT=me@work-domain.com
 * 
 * */

console.log(isSafeEmail('me@personal-domain.com')) // true
console.log(isSafeEmail('other@work-domain.com')) // true
console.log(isSafeEmail('someone-else@other-domain.com')) // false

console.log(ensureSafeEmail('me@personal-domain.com')) // 'me@personal-domain.com'
console.log(ensureSafeEmail('other@work-domain.com')) // 'other@work-domain.com'
console.log(ensureSafeEmail('someone-else@other-domain.com')) // 'me@work-domain.com'
```

```console
$ node example.js

true
true
false
me@personal-domain.com
other@work-domain.com
me@work-domain.com
```

## Configuration

### `EMAIL_WHITELIST`

The comma-delimited list of values to test against, e.g.:

```ini
EMAIL_WHITELIST=me@personal-domain.com,@work-domain.com
```

`EMAIL_WHITELIST` values should be complete email addresses…

```
account@domain.com
```

…and/or whole domains:

```
@domain.com
```


### `EMAIL_DEFAULT`

The optional default value to return from `ensureSafeEmail()` when an email fails validation, e.g.:

```ini
EMAIL_DEFAULT=me@work-domain.com
```

## Testing

```console
$ npm ci
$ npm run test
```

## License

ISC License

Copyright (c) 2019, James Furey

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
