import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { ibmFont } from "./fonts";
import theme from "./theme";
import { COMMON } from "./lib/strings.constants";

import "./globals.css";

export const metadata = {
  title: COMMON.metadata.title,
  description: COMMON.metadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmFont.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
