export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="flex h-screen w-full justify-center bg-dark">
        {children}
      </div>
    </div>
  );
}
