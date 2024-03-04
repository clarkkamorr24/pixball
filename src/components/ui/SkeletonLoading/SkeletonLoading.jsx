export const SkeletonLoading = () => {
  return (
    <div className="w-full py-4 text-white">
      <div className="flex items-center justify-center gap-2 px-4 py-20 text-black dark:text-white">
        <div
          className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span className="text-md">Fetching Data</span>
        <span className="animate-[bounce_1s_infinite_50ms] text-2xl font-bold">
          .
        </span>
        <span className="animate-[bounce_1s_infinite_75ms] text-2xl font-bold">
          .
        </span>
        <span className="animate-[bounce_1s_infinite_100ms] text-2xl font-bold">
          .
        </span>
      </div>
    </div>
  );
};
