"use client";

import {
  createDOMRenderer,
  FluentProvider,
  RendererProvider,
  renderToStyleElements,
  SSRProvider,
  teamsDarkTheme,
} from "@fluentui/react-components";
import { useServerInsertedHTML } from "next/navigation";
import * as React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [renderer] = React.useState(() => createDOMRenderer());

  useServerInsertedHTML(() => {
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={teamsDarkTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
