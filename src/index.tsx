import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "antd/dist/antd.css";

// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';

/**
 * Organização macro do projeto:
 *
 * Pages: São a estrutura que encapsula cada página de rota possível na aplicação
 * Model: Contém os tipos e modelos utilizados
 * API: Possui a integração com a chamada de requisições para as APIs disponíveis
 * Components: Composto pelos componentes que compõe as páginas ou outros componentes que fazem sentido existirem de forma independente
 */

/**
 * Nessa secção, comentarei as principais escolhas do projeto.
 *
 * React: foi escolhido pela familiariade com a lib
 * Axios: pela simplicidade de realizar requisições e tratamento das respostas
 * React Router: pela simplicidade de criação de novas telas
 * Cypress: framework versátil para testes de tela, já utilizado anteriormente
 * React Testing Lib: pela naturalidade da integração com React
 * Styled Components: Modulariação e encapsulamento do css, excelente para criação rápida e concisa de estilos
 */

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
