"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MantineProvider>
      <Provider store={store}>{children}</Provider>
    </MantineProvider>
  );
}
