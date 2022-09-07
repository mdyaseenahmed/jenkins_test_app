import React from 'react';
import { render, screen } from "@testing-library/react";
import FormUI from "../ItemAppCRUDAPI/formUI";

test("Testing the Form UI Comp", () => {
    render(<FormUI />)
    const element = screen.getByText(/Available/);
    const table = screen.getByTestId("table_element")
    const itemName = screen.getByTestId("itemName_element")
    const itemPrice = screen.getByTestId("itemPrice_element")
    const button = screen.getByRole("button")

    expect(element).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})