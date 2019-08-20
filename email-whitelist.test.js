const { isSafeEmail, ensureSafeEmail } = require('./email-whitelist')

process.env.EMAIL_WHITELIST = 'me@personal-domain.com,@work-domain.com'
process.env.EMAIL_DEFAULT = 'me@work-domain.com'

const emails = [
  ['me@personal-domain.com', true],
  ['me@work-domain.com', true],
  ['mE@wOrK-dOmAiN.cOm', true],
  ['other@work-domain.com', true],
  ['not-me@personal-domain.com', false],
  ['me@some-other-domain.com', false],
  ['me@work-domain.net', false],
]

emails.forEach(([email, shouldBeSafe]) => {
  test(`isSafeEmail: ${email}`, () => {
    expect(isSafeEmail(email)).toBe(shouldBeSafe)
  })
  test(`ensureSafeEmail: ${email}`, () => {
    expect(ensureSafeEmail(email)).toBe(
      shouldBeSafe === true
        ? email
        : process.env.EMAIL_DEFAULT
    )
  })
});
