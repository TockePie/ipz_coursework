export default function DishSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-6">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="bg-mistyrose h-56 w-full animate-pulse rounded-2xl transition duration-300 lg:h-82"
          />
        ))}
    </div>
  )
}
