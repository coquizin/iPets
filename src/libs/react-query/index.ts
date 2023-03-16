import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // Keep it off and enable where you want.
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

// const ReactQueryProvider = ({ children, dehydratedState }: Props) => (
//   <QueryClientProvider client={queryClient}>
//     <ReactQueryDevtools position="bottom-right" />
//     <Hydrate state={dehydratedState}>{children}</Hydrate>
//   </QueryClientProvider>
// );
