import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="http://teste">
          <img
            src="https://avatars.githubusercontent.com/u/74938862?v=4"
            alt="Lubnnia Morais"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>Projeto React do Nível 03 - GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://teste">
          <img
            src="https://avatars.githubusercontent.com/u/74938862?v=4"
            alt="Lubnnia Morais"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>Projeto React do Nível 03 - GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="http://teste">
          <img
            src="https://avatars.githubusercontent.com/u/74938862?v=4"
            alt="Lubnnia Morais"
          />
          <div>
            <strong>primeiro-projeto-react</strong>
            <p>Projeto React do Nível 03 - GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
