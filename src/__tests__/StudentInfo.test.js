import { render, screen } from '@testing-library/react'
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StudentInfo from '../components/StudentInfo';
import appStore from '../utils/store/appStore';
test('Should load Student Table inside StudentTable Component', ()=>{
      render(
        <BrowserRouter>
        <Provider store={appStore}>
         <StudentInfo/>
        </Provider>
        </BrowserRouter>
     )
      const studentInfo = screen.getByTestId('student-info');

      expect(studentInfo).toBeInTheDocument();

})