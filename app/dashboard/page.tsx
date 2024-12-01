import DashboardPage from "./DashboardPage";

interface iPageProps {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: iPageProps) {
  return <DashboardPage {...params} {...searchParams} />;
}
