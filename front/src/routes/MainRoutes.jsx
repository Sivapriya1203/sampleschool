import { lazy } from 'react';
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

import { element } from 'prop-types';

// Your component imports
import StaffApplication from 'components/TeachersDomain/StaffApplication';
import StudentAllocation from 'components/StudentsDomain/StudentAllocation';
import DepartmentAlloc from 'components/Department/DepartmentAlloc';
import AddDepartment from 'components/Department/AddDepartment';
import Allocation from 'components/StudentsDomain/Allocation';
import EditAlloc from 'components/StudentsDomain/EditAlloc';
import Feespay from 'pages/component-overview/Feesmanagement/Feespay';
import FeesApplication from 'pages/component-overview/Feesmanagement/FeesApplication';
import PayFeesLog from 'pages/component-overview/Feesmanagement/PayFeesLog';
import Timetable from 'components/Timetable/Timetable';
import DiscountIndex from 'components/Discount/DiscountIndex';
import ClassTeach from 'components/StaffAllocation/ClassTeach';
import Studentsattenance from 'components/Employee/Studentsattenance';
import Students from 'components/EmployeField/Students';
import FeesAllocmanu from 'components/Feesmanagement/FeesAllocmanu';
import Allfeesalloc from 'components/Feesmanagement/Allfeesalloc';
import Feesallocstudent from 'components/Feesmanagement/Feesallocstudent';
import Feespage from 'components/Feesmanagement/Feespage';
import Payfees from 'components/Feesmanagement/Payfees';
import Detailattenance from 'components/EmployeField/Detailattenance';
import Markallocation from 'components/EmployeField/Markallocation';
import Exams from 'components/EmployeField/Exams';
import Staffattenance from 'components/EmployeField/Staffattenance';
import Staffdetail from 'components/EmployeField/Staffdetail';
import Vanattenance from 'components/EmployeField/Vanattenance';
import Vanattenancedetails from 'components/EmployeField/Vanattenancedetails';
import Feesslip from 'components/Feesmanagement/Feesslip';
import Classstudents from 'components/EmployeField/Classstudents';
import UploadExcel from 'components/StudentsDomain/UploadExcel';
// import Mystudents from 'components/EmployeField/Mystudents';

const Login = Loadable(lazy(() => import('pages/authentication/login')));
const AddStaffAllocation = Loadable(lazy(() => import('components/StaffAllocation/AddStaffAllocation')));
const StaffAllocationIndex = Loadable(lazy(() => import('components/StaffAllocation/StaffAllocationIndex')));
const Invoice = Loadable(lazy(() => import('components/Invoice/Invoice')));
const AllFeesLogIndex = Loadable(lazy(() => import('pages/component-overview/Feesmanagement/AllFeesLogIndex')));
const SingleFeeDiscountIndex = Loadable(lazy(() => import('components/Discount/SingleFeeDiscountIndex')));
const FeesPendingStudentsIndex = Loadable(lazy(() => import('components/FeesPendingStudents/FeesPendingStudentsIndex')));
const TimeTableIndex = Loadable(lazy(() => import('components/Timetable/TimeTableIndex')));
const SiblingStudentsIndex = Loadable(lazy(() => import('components/StudentsDomain/SiblingStudentsIndex')));
const FeesLogsIndex = Loadable(lazy(() => import('pages/component-overview/Feesmanagement/FeesLogsIndex')));
const StudentApplication = Loadable(lazy(() => import('components/StudentsDomain/StudentApplication')));
const AllStudents = Loadable(lazy(() => import('components/StudentsDomain/AllStudents')));
const Allstaffs = Loadable(lazy(() => import('components/TeachersDomain/Allstaffs')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const EmployeDash = Loadable(lazy(() => import('pages/empdashboard/index')));

const adminRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'allStudents',
      element: <AllStudents />,
    },
    {
      path: 'addStudent',
      element: <StudentApplication />,
    },
    {
      path: 'uploadExcel',
      element: <UploadExcel />,
    },
    {
      path: 'sibStu',
      element: <SiblingStudentsIndex />,
    },
    {
      path: 'feePendingStu',
      element: <FeesPendingStudentsIndex />,
    },
    {
      path: 'discount',
      element: <DiscountIndex />,
    },
    {
      path: 'singleFeesDiscountIndex/:fees_id',
      element: <SingleFeeDiscountIndex />,
    },
    {
      path: 'timetable',
      element: <Timetable />,
    },
    {
      path: 'timeTableIndex',
      element: <TimeTableIndex />,
    },
    {
      path: 'studentalloc/:cls_id',
      element: <StudentAllocation />,
    },
    {
      path: 'feespage/:cls_id',
      element: <Feespage/>,
    },
    {
      path: 'addStaff',
      element: <StaffApplication />,
    },
    {
      path: 'allstaffs',
      element: <Allstaffs />,
    },
    {
      path: 'addStaffAllocation',
      element: <AddStaffAllocation />,
    },
    {
      path: 'staffAllocationIndex',
      element: <StaffAllocationIndex />,
    },
    {
      path: 'department',
      element: <DepartmentAlloc />,
    },
    {
      path: 'feesslip/:stu_id',
      element: <Feesslip/>,
    },
    {
      path: 'editalloc',
      element: <EditAlloc />,
    },
    {
      path: 'addDept',
      element: <AddDepartment />,
    },
    {
      path: 'feesallocationmanu',
      element: <FeesAllocmanu />,
    },
    {
      path: 'payfees/:stu_id',
      element: <Payfees/>,
    },
    {
      path: 'feesstudent',
      element: <Feesallocstudent />,
    },
    {
      path: 'feescomponents',
      element: <Allfeesalloc />,
    },
    {
      path: 'allocation',
      element: <Allocation />,
    },
    {
      path: 'feespay',
      element: <Feespay />,
    },
    {
      path: 'allFeesLogIndex',
      element: <AllFeesLogIndex />,
    },
   
    {
      path: 'payfeeslog',
      element: <PayFeesLog />,
    },
    {
      path: 'feeLogsByFeeId/:fees_id',
      element: <FeesLogsIndex />,
    },
    {
      path: 'invoice/:feeslogid',
      element: <Invoice/>,
    },
    {
      path: 'feesapplication',
      element: <FeesApplication />,
    },
    {
      path: 'classteach',
      element: <ClassTeach />,
    },
    {
      path: 'Studattenance',
      element: <Studentsattenance />,
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

const employeeRoutes = {
  path: '/',
  element: <Dashboard/>,
  children: [
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <EmployeDash/>
        }
      ]
    },
   
    {
      path: '/',
      element: <EmployeDash/>
    },
    // {
    //   path: '/mystudents',
    //   element: <Mystudents/>
    // },

    {
      path: '/classstudents',
      element: <Classstudents/>
    },
    {
      path: '/attendance',
      element: <Students/>
    },
    {
      path: '/markallocstud',
      element: <Markallocation/>
    },
    {
      path: '/stafffeesdetail/:staff_id',
      element: <Staffdetail/>
    },
    {
      path: '/profile',
      element: <Staffattenance/>
    },
    {
      path: '/exams',
      element: <Exams/>
    },
    {
      path: '/vanattenance/:staff_id',
      element: <Vanattenance/>
    },
   
    {
      path: '/vanattenancedetails/:staff_id',
      element: <Vanattenancedetails/>
    },
    
    {
      path: '/attenancedetails/:staff_id',
      element: <Detailattenance/>
    },
    
  ]
};

const MainRoutes = sessionStorage.getItem("admin") ? adminRoutes :
  (sessionStorage.getItem("employeeLoggedIn") ? employeeRoutes : {
    path: '/',
    element: <Login />
  });

export default MainRoutes;
