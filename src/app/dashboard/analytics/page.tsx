import RedirectServer from "@/app/actions"

const AnalyticsPage = () => {
  return (
    <RedirectServer path="/dashboard" />
  )

  return (
    <div>
      <h1>Analytics Page</h1>
      <p>This is the analytics page</p>
    </div>
  )
}

export default AnalyticsPage