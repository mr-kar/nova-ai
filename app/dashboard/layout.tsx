import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#060816] text-white">
      <Sidebar />
      <Topbar />

      <main className="min-h-screen pt-20 lg:pl-64">
        <div className="mx-auto max-w-[1600px] p-5 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}