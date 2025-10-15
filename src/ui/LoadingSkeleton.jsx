function LoadingSkeleton() {
  return (
    <div className="animate-pulse px-4 py-3">
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-24 w-24 rounded-lg bg-stone-200"></div>
            <div className="flex-1 space-y-3 py-1">
              <div className="h-4 w-3/4 rounded bg-stone-200"></div>
              <div className="h-3 w-1/2 rounded bg-stone-200"></div>
              <div className="h-3 w-1/4 rounded bg-stone-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkeleton;

