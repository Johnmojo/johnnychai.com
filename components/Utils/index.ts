/**
 * Utils for the createScriptTag
 * @date 29th August 2022
 */

// Create and insert inject script tag
export const createScriptTag = (providerEmbedUrl: string | null) => {
  const script = document.createElement(`script`);
  script.type = `text/javascript`;

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl;
  }

  document.getElementsByTagName(`head`)[0].appendChild(script);
};
