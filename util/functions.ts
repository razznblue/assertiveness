export const generateRandomString = (length: number): string => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    result += charset.charAt(randomIndex)
  }

  return result
}

export const getInitials = (fullName: string): string => {
  if (fullName.includes(' ')) {
    const firstName = fullName.split(' ')[0].toLowerCase()
    const lastName = fullName.split(' ')[1].toLowerCase()
    return firstName[0] + lastName[0]
  }
}
