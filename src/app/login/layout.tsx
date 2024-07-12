export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center items-center bg-primaryColor h-[100vh]">
      <div className=" z-10">{children}</div>
    </section>
  );
}
