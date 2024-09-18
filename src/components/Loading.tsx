import { Skeleton } from "@/components/ui/skeleton";

const SkeletonItem = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export function Loading() {
  return (
    <div className="mt-6 grid gap-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
}
