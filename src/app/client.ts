import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
// const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
const clientId = 'c077775bd3b1a14901b7c0ca381acf86'

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
