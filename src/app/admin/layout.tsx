import AppFooterAdmin from "@/components/admin/main/app.footer"
import AppHeaderAdmin from "@/components/admin/main/app.header"
import AdminSidebar from "@/components/admin/main/app.sidebar"

export const metadata = {
  title: 'Admin Page',
  description: 'Du lịch trải nghiệm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AppHeaderAdmin />
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        <AdminSidebar />
        {children}
      </div>

      <AppFooterAdmin />
    </>


  )
}
