/**
 * Instagram custom embed props
 * @date 26th August 2022
 */

import { useEffect, useState } from "react";
import { Observer } from "../../Widget/Instagram";
import { handleInstagrmLoad } from "./utils";

declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process(): void;
      };
    };
  }
}

interface Props {
  postID: string;
}

const Instagram = ({ postID }: Props) => {
  const [instgrmScript, setInstgrmScript] = useState(false);

  useEffect(() => {
    // Call the instgrm load function to refresh stale content
    if (typeof window.instgrm !== "undefined") {
      setInstgrmScript(true);
      window.instgrm.Embeds.process();
    }
  }, [instgrmScript]);

  return (
    <Observer onLoad={handleInstagrmLoad}>
      <blockquote
        data-testid="instagram"
        className="instagram-media instagram-mdx-embed"
        data-instgrm-version="12"
      >
        <a href={`https://instagram.com/p/${postID}`}>
          {typeof window !== "undefined" && !window.instgrm ? "Loading" : ""}
        </a>
      </blockquote>
    </Observer>
  );
};

export default Instagram;
