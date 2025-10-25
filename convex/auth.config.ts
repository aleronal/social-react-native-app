import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: 'https://innocent-tarpon-25.clerk.accounts.dev',
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;