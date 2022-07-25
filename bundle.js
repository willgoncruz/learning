
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

// import App from './App';
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
ReactDOM__default["default"].render(jsxRuntime.jsx("div", {}), document.getElementById('root'));
