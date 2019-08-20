# email-whitelist

## Overview

Check/ensure email safety against a predefined email whitelist.

If ensuring, unsafe emails fall back to a predefined default.

## Prerequisites

- `node -v` >= 10.15.3
- `npm -v` >= 6.4.1

## Installation

```
npm ci
```

## Testing

```
npm run test
```

## Environment Variables

`EMAIL_WHITELIST`

The comma-delimited list of emails/domains to test against, e.g.:

```
EMAIL_WHITELIST=me@personal-domain.com,@work-domain.com
```

`EMAIL_DEFAULT`

The default value to return when an email isn't safe, e.g.:

```
EMAIL_DEFAULT=me@work-domain.com
```

## Example Usage

```js
const { isSafeEmail, ensureSafeEmail } = require('./email-whitelist')

/**
 * Assuming the following `process.env` variables are set…
 * 
 * - EMAIL_WHITELIST=me@personal-domain.com,@work-domain.com
 * - EMAIL_DEFAULT=me@work-domain.com
 * 
 * */

console.log(isSafeEmail('me@personal-domain.com')) // true
console.log(isSafeEmail('other@work-domain.com')) // true
console.log(isSafeEmail('me@other-domain.com')) // false

console.log(ensureSafeEmail('me@personal-domain.com')) // 'me@personal-domain.com'
console.log(ensureSafeEmail('other@work-domain.com')) // 'other@work-domain.com'
console.log(ensureSafeEmail('me@other-domain.com')) // 'me@work-domain.com'
```
