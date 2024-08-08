import RentalsSection from '@/components/dashboard/RentalsSection'
import TotalSales from '@/components/dashboard/TotalSales'
import BookingsThroughAutoflow from '@/components/dashboard/BookingsThroughAutoflow'
import FinancialSummary from '@/components/dashboard/FinancialSummary'
import RentalRequests from '@/components/dashboard/RentalRequests'
import BusinessBookings from '@/components/dashboard/BusinessBookings'

const DashboardPage = () => {
  return (
    <div className="pt-18 px-30 pb-8">
      <RentalsSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 pt-14">
        <div
          className="lg:col-span-1"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <TotalSales />
        </div>
        <div
          className="lg:col-span-1 grid grid-rows-7 gap-14"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <div className="row-span-2">
            <BookingsThroughAutoflow />
          </div>
          <div className="row-span-5">
            <RentalRequests />
          </div>
        </div>
        <div
          className="lg:col-span-1 grid grid-rows-7 gap-14"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <div className="row-span-2">
            <FinancialSummary />
          </div>
          <div className="row-span-5">
            <BusinessBookings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
