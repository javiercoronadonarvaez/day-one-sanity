import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "fl6tufw3",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});
