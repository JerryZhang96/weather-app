import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "@/components/error-fallback";
import { Loading } from "@/components/loading";
import { Logo } from "./logo";
import { Info } from "./info";

const SearchHistoryList = lazy(() => import("./search-history-list"));

export default function Weather() {
  return (
    <section className="relative rounded-[20px] border-[1px] border-white bg-card/[.2] px-[26px] py-5 dark:border-0 dark:border-card/[0.3] dark:bg-card/[0.3] md:rounded-[40px] md:px-[50px] md:py-[46px]">
      <Logo />
      <Info />
      <ErrorBoundary fallbackRender={ErrorFallback}>
        <Suspense fallback={<Loading text="Loading search history..." />}>
          <SearchHistoryList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
