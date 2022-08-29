/**
 * Utils for the Instagram widget
 * @date 26th August 2022
 */

import { createScriptTag } from "../../Utils/index";

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
