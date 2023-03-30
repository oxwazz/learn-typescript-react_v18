export default function Title({
  children,
  className
}: {
  children: string;
  className?: string;
}) {
  return (
    <h1
      className={`w-full text-center text-sm font-medium bg-slate-500 rounded-md p-2 text-white ${className}`}
    >
      {children}
    </h1>
  );
}
