const ensureSafeEmail = input =>
  isSafeEmail(input)
    ? input
    : getDefaultEmail()

const isSafeEmail = input => {
  const whitelist = getWhitelist()
  if (!whitelist) return true
  const { domains, emails } = extractDomainsAndEmails(whitelist)
  if (domains.find(domain => (new RegExp(`${domain}$`, 'i')).test(input))) return true
  const inputRegex = new RegExp(`^${input}$`, 'i')
  if (emails.find(email => inputRegex.test(email))) return true
  return false
}

const extractDomainsAndEmails = whitelist =>
  whitelist
    .split(/\s*,\s*/)
    .reduce(({ domains, emails }, string) => {
      string.startsWith('@')
        ? domains.push(string)
        : emails.push(string)
      return { domains, emails }
    }, { domains: [], emails: [] })

/**
 * @summary The comma-delimited list of emails/domains to test against
 * @example EMAIL_WHITELIST=me@personal-domain.com,@work-domain.com
 * @returns {(string|undefined)}
 */
const getWhitelist = _ =>
  process.env.EMAIL_WHITELIST

/**
* @summary The default value to return when an email isn't safe
* @example EMAIL_DEFAULT=me@work-domain.com
* @returns {(string|undefined)}
*/
const getDefaultEmail = _ =>
  process.env.EMAIL_DEFAULT

module.exports = {
  isSafeEmail,
  ensureSafeEmail
}
