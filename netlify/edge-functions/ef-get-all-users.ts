import { neon } from '@neondatabase/serverless';

export default async function handler() {
  const sql = neon(Netlify.env.get('CONNECTION_STRING'));
  try {
    const data = await sql`SELECT * FROM users`;

    return new Response(JSON.stringify({ message: 'A-Ok!', data }, null, 2), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    return new Response({
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

export const config = { path: '/ef-get-all-users' };
