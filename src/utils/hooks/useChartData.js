import { useDispatch } from 'react-redux'
import { addLineChartData, addPieChartData } from '../store/studentSlice';
import STUDENT_DATA from '../constants/students.json'
import { useEffect } from 'react';
// import { Chart } from "tw-elements";

const useChartData = () => {
    const dispatch = useDispatch();
    const initalizeGraphdata = ()=>{
        let renderingObj = {}
        let studentsWithCity = {}
        STUDENT_DATA.forEach(student => {
            let arr = Object.keys(student.grades);
            arr.forEach(subject => {
                if (!renderingObj[student.grades[subject]]) {
                    renderingObj[student.grades[subject]] = 1
                } else {
                    renderingObj[student.grades[subject]]++;
                }
            })
            if (!studentsWithCity[student.city]) {
                studentsWithCity[student.city] = 1
            } else {
                studentsWithCity[student.city]++;
            }
        })
        const dataPie = {
            type: 'pie',
            data: {
                labels: Object.keys(renderingObj),
                datasets: [
                    {
                        label: 'showing the number of students in the respective city day',
                        data: Object.values(renderingObj),
                        backgroundColor: [
                            'rgba(63, 81, 181, 0.5)',
                            'rgba(77, 182, 172, 0.5)',
                            'rgba(66, 133, 244, 0.5)',
                            'rgba(156, 39, 176, 0.5)',
                            'rgba(233, 30, 99, 0.5)',
                            'rgba(66, 73, 244, 0.4)',
                            'rgba(66, 133, 244, 0.2)',
                        ],
                    },
                ],
            },
        };
        console.log(renderingObj)
        console.log(studentsWithCity)
        const dataLine = {
            type: 'line',
            data: {
                labels: Object.keys(studentsWithCity),
                datasets: [
                    {
                        label: 'showing the number of students in the respective city day',
                        data: Object.values(studentsWithCity),
                    },
                ],
            },
        };
        dispatch(addPieChartData(dataPie));
        dispatch(addLineChartData(dataLine));
    }
    useEffect(()=>{
       initalizeGraphdata();
    },[])
}

export default useChartData;