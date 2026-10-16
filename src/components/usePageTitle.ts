import { useEffect } from "react";

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Danam Holdings` : "Danam Holdings | Towards Fortune Unfoldings";
  }, [title]);
}
