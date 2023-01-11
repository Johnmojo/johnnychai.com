/**
 * Utils for the Instagram widget
 * @date 26th August 2022
 */

// Create and insert inject Instagram script tag
export const createScriptTag = (providerEmbedUrl: string | null) => {
  const script = document.createElement(`script`);
  script.type = `text/javascript`;

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl;
  }

  document.getElementsByTagName(`head`)[0].appendChild(script);
};

const instagramClassNames = [
  `.instagram-media`,
  `.instagram-media-rendered`
].join(`,`);
let isInstgrmScriptAdded = false;
const instagramEmbedUrl = "https://www.instagram.com/embed.js";

// Check if instgrm exists
export const handleInstagrmLoad = () => {
  if (document.querySelectorAll(instagramClassNames) !== null) {
    if (!isInstgrmScriptAdded) {
      createScriptTag(instagramEmbedUrl);
      isInstgrmScriptAdded = true;
      return;
    }
  }
};
