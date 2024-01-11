import { Link } from 'react-router-dom';
import STUDENT_DATA from '../utils/constants/students.json'
const StudentTable = () => {
    return (
        <div>
            <div className='flex justify-center mt-5'><h3 className='font-bold'>All Student Details</h3></div>
            <div className="flex flex-col w-3/4 ml-auto mr-auto">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light" data-testid="table">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Age</th>
                                        <th scope="col" className="px-6 py-4">Date of Birth</th>
                                        <th scope="col" className="px-6 py-4">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                      STUDENT_DATA.map(student=>{
                                       return(
                                       <Link key={student.date_of_birth+student.name} className="table-row border-b dark:border-neutral-500  hover:bg-slate-300 hover:cursor-pointer" to={"/student-info/"+JSON.stringify(student)}>
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{student?.name} </td>
                                        <td className="whitespace-nowrap px-6 py-4">  {student?.age}</td>
                                        <td className="whitespace-nowrap px-6 py-4">  {student?.date_of_birth}</td>
                                        <td className="whitespace-nowrap px-6 py-4">  {student?.city}</td>
                                       </Link>)
                                      })  
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTable;