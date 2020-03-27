// import React, { useState } from 'react';
import React from 'react';

import './global.css'

import Routes from './routes';
/**
 * Conceito JSX (JavaScript XML)
 * É quando o HTML está integrado dentro do Javascript
 * XML significa que está utilizando a sintaxe HTML (em tags)
 */

 /**
 * Um componente no React é uma função que retorna HTML
 * Pode ter funcionalidade Javascript, css e tudo mais
 * Este arquivo é um exemplo de componente, basta olha para a função App()
 */

function App() {
  /**
   * Conceito de Imutabilidade
   * 
   */

  /**
   * Conceito de Estado
   * Deve ser importado o useState ao lado do React
   * e usado o método useState para inicializar o valor da variável
   * o método retorna um array com a seguinte estrutura
   * 
   * Array a 1ª posição é o valor da variável
   * Array a 2ª posição é a função que me permitirá alterar o valor
   * Exemplo:
   * Array [valor, função de atualização (troca o valor)]
   * 
   * OBS1: Não podemos nunca manipular uma variável de forma direta.
   * Exemplo:
   * counter = 0;
   * counter += 1;
   */

  // let counter = useState(0);
  // let [ counter, setCounter ] = useState(0); //usando desestruturação, como retorna um array posso desestrutura com couchetes []
  

  // function increment(){
  //   setCounter(counter + 1)
  // }

  return (
    //Essa forma de passar é por atributo
    // <Header title="Semana Omnistack" />

    // Para acessar o conteúdo de dentro da tag Header (componente)
    // é preciso utilizar um atributo chamado "children"
    // que chega como parâmetro dentro do componente.
    // Podemos acessar lá no componente de duas formas:
    // Por desestruturação: Exemplo - { children }
    // Por propriedade: Exemplo props.children
    // <Header>
    //   Be The Hero
    // </Header>

    /**
     * Aprendendo o conceito Estado no React
     * Caso precise armazenar dados como de um input, listagem de dados de uma API externa
     * E precise manipular, alterar, excluir, não podemos usar variáveis convencionais
     */
    /**
     * OBS1: O React não permite criar elementos sem nada por volta
     * ou seja, o componente Header e o button precisa está dentro
     * de uma div para funcionar.
     */
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    <Routes />
  );
}

export default App;
