import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const StudentInfo = () => {
  const { student } = useParams();
  const pdfRef = useRef();
  const studentDetails = student && JSON.parse(student);
  return (
    <div data-testid="student-info">
      <Link to="/">
        <button className="bg-black ml-5 mt-5 text-cyan-50 py-2 px-5 rounded">
          Back
        </button>
      </Link>
      <Header pdfRef={pdfRef} />
      <div
        ref={pdfRef}
        className="hover:bg-slate-100 flex ml-auto mr-auto mt-12 flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row"
      >
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {studentDetails?.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {studentDetails?.city}
          </p>
          <p className="text-xs  mb-5 text-neutral-500 dark:text-neutral-300">
            Date of birth: {studentDetails?.date_of_birth}
          </p>
          {studentDetails?.grades &&
            Object.keys(studentDetails?.grades).map((subject) => {
              return (
                <p
                  key={subject}
                  className="text-xs text-neutral-500 dark:text-neutral-300"
                >
                  Grades in {subject} : {studentDetails?.grades[subject]}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
