import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  //   projectId: process.env.REACT_SANITY_PROJECT_SANITY_ID,
  projectId: "laou75ty",
  dataset: "production",
  apiVersion: "2021-12-27",
  useCdn: true,
  token:
    "skeGtE6L3ES0gmBNMWrJKxm1eV0u6l6GiW8BMqwBuxoi19TnVtgw1xWs4mpX4xw36V0yaToErk5thJ1p0MSMp47vWhWJeN51aRFrdZrKbXwOJ3YCr7pORd8GpFIlAQqRXxMi0QvErDQQVZTLhNVx1VM53LGvEXLuvTkdtrq3WZU3DKwCWePv",
  // "skG5u6wXCiqpkO0aRGv5hKsjW97HLfiZyBhtYL7vZkgy1nCdWrJ2jKNh0uWNXvtmwTv2eIIRVhee0A9vEZyhtQovH07QQAJeQGgOtNKBN07UH5wh4mETzjPxBFKacGObEbB2qvsGwTUgHZFZ2H7upUqAqewx8nVp8epWXAIWJoclSKJsZ8mz",
  // "skbjGoMOdG3mkL8lEjdodvbePUWTUCCgeHLizmkdNSS7QpcCg07ytjPEZwt1ecnabHO9W8xdG8MPgTENJIC2R3jGNzFaeD3pu4uhlb79FlBFTpChcBNUp5lZdKwacwI4d9IOtdaX9XWTjRi1AjbJzfb2uF3SRpIMmHtjx8EFCQIMiOYLf9G9",
  //   token: process.env.REACT_APP_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
//nodemailera