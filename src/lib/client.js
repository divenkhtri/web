import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "fgkwdaus",
  dataset: "production",
  apiVersion: "2023-07-30",
  useCdn: true,
});
