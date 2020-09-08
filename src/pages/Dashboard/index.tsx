import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>

            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/41312615?s=460&u=8b9ac539e207eda00300afb1d734341a5cb5c545&v=4"
                        alt="Felipe Oliveira"
                    />
                    <div>
                        <strong>teste/teste</strong>
                        <p>Teste teste teste</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/41312615?s=460&u=8b9ac539e207eda00300afb1d734341a5cb5c545&v=4"
                        alt="Felipe Oliveira"
                    />
                    <div>
                        <strong>teste/teste</strong>
                        <p>Teste teste teste</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/41312615?s=460&u=8b9ac539e207eda00300afb1d734341a5cb5c545&v=4"
                        alt="Felipe Oliveira"
                    />
                    <div>
                        <strong>teste/teste</strong>
                        <p>Teste teste teste</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;
