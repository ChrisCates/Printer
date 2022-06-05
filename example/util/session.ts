export const password = 'gefsZalDzffaK2cuW6UWqBChYFguiMLT'

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
}
