// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe("botao contador",() =>{

render(

<App/>

)
test('loads and displays greeting', async () => {

  fireEvent.click(

  screen.getByRole('button', {  name: /count is: 0/i})
  

  )

  await waitFor(() => screen.getByRole('heading'))

  expect(  screen.getByText(/count is: 1/i)
  ).toBeInTheDocument()


})
})


