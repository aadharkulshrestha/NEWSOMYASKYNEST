export function phoneValidator(phone) {
  if (!phone) return "Password can't be empty."
  if (phone.length < 10) return 'Phone Number only be of 10 digits long.'
  return ''
}
