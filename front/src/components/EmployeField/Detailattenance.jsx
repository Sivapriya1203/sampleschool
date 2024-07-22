// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'
// // import config from '../../config'
// // import { useParams } from 'react-router'

// // function Detailattenance() {

// //     const {staff_id} = useParams()

// //     const [attendanceData,setAttendancedata]= useState([])
// //     useEffect(()=>{

// //         axios.get(`${config.apiURL}/students/detailattenance/${staff_id}`)
// //         .then((res)=>{
// //             setAttendancedata(res.data)
// //         })
// //         .catch((err)=>{
// //             console.log(err)
// //         })

// //     },[staff_id,config.apiURL])
// //   return (
// //     <div>
// //         <h4>Stuent Present Absent Details</h4>
// //         <table style={{ width: '600px', border:'3px' }}>
// //             <tr style={{border:'5px'}}>
// //                 <th>student name</th>
// //                 <th>status</th>
// //                 <th>Date</th>
// //             </tr>
// //  {attendanceData.map((data)=>(
// //     <tr key={data.stu_id}>
// //            <td>{data.stu_name}</td>
// //             <td>{data.status}</td>
// // <td>{data.date}</td>
// //     </tr>
// //  ))}
// // </table>
// //     </div>
// //   )
// // }

// // export default Detailattenance




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import config from '../../config';
// import { useParams } from 'react-router';
// import { border } from '@mui/system';
// import { color } from 'framer-motion';

// function DetailAttendance() {
//     const { staff_id } = useParams();
//     const [attendanceData, setAttendanceData] = useState([]);

//     useEffect(() => {
//         axios.get(`${config.apiURL}/students/detailattenance/${staff_id}`)
//             .then((res) => {
//                 setAttendanceData(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [staff_id]);

//     const formatDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     const tableStyle = {
//         width: '600px',
//         border:'3px',
//         borderCollapse: 'collapse',
//         margin: '20px 0',
//     };

//     const headerStyle = {
//         backgroundColor: 'black',
//         color:'white',
//         borderBottom: '2px solid #ddd',
//         padding: '10px',
//         textAlign: 'left',

//     };

//     const cellStyle = {
//         backgroundColor:'lightgray',
//         borderBottom: '1px solid #ddd',
//         padding: '10px',
//     };

//     return (
//         <div>
//             <h4>Student Attendance Details</h4>
//             <table style={tableStyle}>
//                 <thead>
//                     <tr>
//                         <th style={headerStyle}>Student Name</th>
//                         <th style={headerStyle}>Status</th>
//                         <th style={headerStyle}>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {attendanceData.map((data) => (
//                         <tr key={data.stu_id}>
//                             <td style={cellStyle}>{data.stu_name}</td>
//                             <td style={cellStyle}>{data.status}</td>
//                             <td style={cellStyle}>{formatDate(data.date)}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default DetailAttendance;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../../config';
import { useParams } from 'react-router';

function DetailAttendance() {
    const { staff_id } = useParams();
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        axios.get(`${config.apiURL}/students/detailattenance/${staff_id}`)
            .then((res) => {
                setAttendanceData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [staff_id]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const tableStyle = {
        width: '600px',
        border: '3px solid black',
        borderCollapse: 'collapse',
        margin: '20px 0',
    };

    const headerCellStyle = {
        backgroundColor: 'black',
        color: 'white',
        borderBottom: '3px solid black',
        padding: '10px',
        border:'2px solid black',
        textAlign:'center',
    
    };

    const cellStyle = {
        backgroundColor: '#ddd',
        borderBottom: '2px solid black',
        padding: '10px',
        textAlign:'center',
    };

    return (
        <div>
            <h4>Student Attendance Details</h4>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>Student Name</th>
                        <th style={headerCellStyle}>Status</th>
                        <th style={headerCellStyle}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((data) => (
                        <tr key={data.stu_id}>
                            <td style={cellStyle}>{data.stu_name}</td>
                            <td style={cellStyle}>{data.status}</td>
                            <td style={cellStyle}>{formatDate(data.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DetailAttendance;

