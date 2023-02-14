import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Game from "./Game";
import userEvent from "@testing-library/user-event";
import mockCountry from "./mockCountry";
const mockHandler = jest.fn()

test('renders Game', () => {
    const { container } = render(<Game />)
    expect(container).toBeDefined()
})
test('api loads', async () => {
    
    render(<Game />)
    const button = screen.getByText('Start')
    await new Promise((r) => setTimeout(r, 1000));
    await userEvent.click(button)
    const flag = screen.getByRole('img')
    
    expect(flag).toBeDefined()
})
test('correct choice', async () => {
    render(<Game />)
    const button = screen.getByText('Start')
    await new Promise((r) => setTimeout(r, 2000));
    await userEvent.click(button)

})