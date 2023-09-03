import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';

import { generateRandomString } from '@/lib/helper';
async function spotifyAuth(req: NextApiRequest, res: NextApiResponse) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;
  const state = generateRandomString(16);
  const scope = 'user-top-read user-read-private user-read-email';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: SPOTIFY_REDIRECT_URI,
        state: state,
      })
  );
}

export default spotifyAuth;
