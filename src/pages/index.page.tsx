import { ThemeProvider } from "@mui/material";
import { ibmFont } from "app/fonts";
import theme from "app/theme";
import Dashboard from "$/dashboard/Dashboard";

import "./globals.css";

interface iPageProps {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: iPageProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={ibmFont.className}>
        <Dashboard {...params} {...searchParams} />
      </div>
    </ThemeProvider>
  );
}
