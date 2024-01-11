import { render, screen,fireEvent, waitFor, getByRole } from '@testing-library/react'
import React from 'react';
import LineChart from "../components/LineChart";
test('Should load Line Chart inside LineChart Component', ()=>{
   render(<LineChart data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Traffic",
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
          },
        ],
      }} />)
      const lineChart = screen.getByTestId('line-chart');

      expect(lineChart).toBeInTheDocument();

})