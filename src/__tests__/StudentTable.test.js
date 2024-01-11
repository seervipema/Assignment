import { render, screen } from '@testing-library/react'
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StudentTable from '../components/StudentTable';
import appStore from '../utils/store/appStore';
test('Should load Student Table inside StudentTable Component', ()=>{
      render(
        <BrowserRouter>
        <Provider store={appStore}>
         <StudentTable/>
        </Provider>
        </BrowserRouter>
     )
      const table = screen.getByTestId('table');

      expect(table).toBeInTheDocument();

})