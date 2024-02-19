export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="bg-dark flex h-screen w-full justify-center">
        {children}
      </div>
    </div>
  );
}
