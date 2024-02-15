export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex bg-dark h-screen w-full justify-center">
        {children}
      </div>
    </div>
  );
}
