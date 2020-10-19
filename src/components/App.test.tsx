import { render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import { render } from '@testing-library/react';
import App from './App';

let container: any = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza con o sin nombre", () => {
  act(() => {
    render(<App />, container);
  })
  expect(
    container.querySelector('.page-title').textContent
  ).toEqual('Open Gigs')
});
