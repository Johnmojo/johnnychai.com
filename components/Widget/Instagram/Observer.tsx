/**
 * Observer component for widgets
 * @date 29th August 2022
 */

import { useEffect, useState } from "react";

interface Props {
  onLoad?: (onLoad?: string) => void;
  height?: number;
  children: React.ReactNode;
}

// Load the onLoad function when loaded
const Observer = ({ children, onLoad, height = 0 }: Props) => {
  const [isChildVisible, setIsChildVisible] = useState(false);
  // TODO: Implement intersection observer API
  useEffect(() => {
    if (onLoad) {
      onLoad();
      setIsChildVisible(true);
    }
  }, [onLoad]);

  return (
    <div className="mdx-embed">
      {isChildVisible ? children : <div style={{ height, width: "100%" }} />}
    </div>
  );
};

export default Observer;
