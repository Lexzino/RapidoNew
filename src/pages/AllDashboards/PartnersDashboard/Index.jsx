import { ConsultationBox, ProfileBox } from '../components/Consultation';
import { StatsRow } from '../components/StatCards';
import { PatientInfo } from '../components/PatientInfoCard';
import { AppointmentRequestList } from '../components/AppointmentRequestList';
import { PatientStats } from '../components/PatientStats';
import { GenderDistribution } from '../components/GenderDistribution';
import { TodayAppointments } from '../components/TodaysAppointment';
// import { CalendarView } from '../components/CalendarView';
import RecentPatients from '../components/RecentPatients';

function Index() {
  return (
    <div className="p-4 md:p-6 w-full min-w-[980px] flex flex-col md:flex-row lg:flex-row">
      <div className="w-full">
        {/* Stats Row - Top section with 4 cards */}
        <div className="mb-6 w-full">
          <StatsRow />
        </div>

        <div className="md:justify-between gap-6">
          {/* Main Content Area */}
          <div className="space-y-6">
            {/* Top Row with Consultation/Profile and Patient Info */}
            <div className="flex gap-4">
              {/* Left Side - Consultation and Profile */}
              <div className="w-1/5 space-y-4">
                <ConsultationBox />
                <ProfileBox />
              </div>
              {/* Right Side - Patient Info Card */}
              <div className="flex-1">
                <PatientInfo />
              </div>
            </div>
            <div className="flex gap-4">
              {/* Make this div slightly bigger */}
              <div className=" w-1/2 ">
                <AppointmentRequestList />
              </div>

              {/* Keep the second column normal */}
              <div className="w-1/3 space-y-4">
                <PatientStats />
                <GenderDistribution />
              </div>

              {/* Right Sidebar */}
              <div className="w-1/2 space-y-6">
                <TodayAppointments />
              </div>
            </div>
            {/* Recent Patients Section */}
            <div className="">
              <RecentPatients />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;