import { AgentsView } from "@/modules/agents/ui/views/agents-view";
import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import { trpc, getQueryClient } from "@/trpc/server";
import { Suspense } from "react";
import { LoadingState } from "@/components/loading-state";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorState } from "@/components/error-state";

const Page = async () => {
    const queryClient = getQueryClient();     
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState title="Loading agents" description="Please wait while we load the agents" />}>
                <ErrorBoundary fallback={<ErrorState title="Error loading agents" description="Please try again later" />}>
                    <AgentsView />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    )
};

export default Page; 