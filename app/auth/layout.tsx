import AuthNav from "./AuthNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNav />
      {children}
    </>
  );
}
