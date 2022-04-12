import { randomBytes } from 'crypto'

export const UtilSessionTemplate = `export const password = '${randomBytes(32).toString('hex')}';

export const Session = {
  cookieName: 'printer',
  password,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
`
