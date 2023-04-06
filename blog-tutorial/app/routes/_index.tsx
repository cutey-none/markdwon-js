import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
      <div className="mx-auto mt-16 max-w-7xl text-center">
        <Link
          to="/posts"
          className="text-xl text-blue-600 underline"
        >
          Blog Posts
        </Link>
      </div>
  );
}
