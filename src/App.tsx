import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ThemeProvider } from "@/providers/theme-provider";
import { WeatherProvider } from "@/providers/weather-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchInput } from "@/components/search-input";
import { ErrorFallback } from "@/components/error-fallback";
import { Loading } from "@/components/loading";

const Weather = lazy(() => import("@/components/weather"));

function App() {
  return (
    <div className="relative h-screen overflow-y-scroll bg-weather-light bg-cover py-20 font-noto-sans dark:bg-weather-dark">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="mx-[18px] max-w-[700px] md:mx-auto">
          <ThemeToggle />
          <WeatherProvider>
            <SearchInput />
            <ErrorBoundary fallbackRender={ErrorFallback}>
              <Suspense fallback={<Loading text="Loading..." />}>
                <Weather />
              </Suspense>
            </ErrorBoundary>
          </WeatherProvider>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
