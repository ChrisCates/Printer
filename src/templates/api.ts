export function ApiTemplate (name: string) {
  return `import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { Session } from 'util/session';

export const ${name} = withIronSessionApiRoute(
    async (req: NextApiRequest, res: NextApiResponse) => {
        res.status(200).send({ 'status': 'OK' })
    },
    Session,
);

export default ${name};
`
}
