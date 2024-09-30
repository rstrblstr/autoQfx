// apps/nexrender-server/server.ts

import { listen } from '@nexrender/server';

const port = 3000;
const secret = 'myapisecret';

listen(port, secret, () => {
    console.log(`Nexrender Server listening on port ${port}`);
});
