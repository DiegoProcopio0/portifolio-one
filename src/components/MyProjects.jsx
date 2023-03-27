import { Project } from "./Project";

export function MyProjects() {
    return (
        <div
            data-aos="fade-up"
            id="meus-projetos"
        >
            <h2 className="text-blue-400 text-center text-2xl font-bold sm:text-left mt-7">
                #Meus Projetos
            </h2>
            <Project
                linkProject="https://github.com/DiegoProcopio0/quiz"
                linkImage="https://i.ibb.co/LQcTXXR/img4.png"
                title="Quiz"   
                aboutProject=" Esse projeto é um quiz de perguntas e respostas, feito com NextJS e TypeScript." 
                technology="NextJS" 
                technology1="TypeScript" 
                technology2="CSS Modules" 
            />
            <Project
                linkProject="https://github.com/DiegoProcopio0/monty-hall"
                linkImage="https://i.ibb.co/Qp5Wn7x/img3.png"
                title="Monty Hall"   
                aboutProject=" Esse projeto é baseado em um Jogo chamado Monty Hall, feito com NextJS e TypeScript." 
                technology="NextJS" 
                technology1="TypeScript" 
                technology2="CSS Modules" 
            />
            <Project
                linkProject="https://github.com/DiegoProcopio0/RockFlix"
                linkImage="https://github.com/DiegoProcopio0/RockFlix/blob/main/assets-readme/image-2.png?raw=truehttps://i.ibb.co/FhH97NH/Anota-o-2022-06-28-085301.png"
                title="RocketFlix"   
                aboutProject="O projeto tem como base pegar de uma api os 20 filmes mais populares do momento e mostrar em tela." 
                technology="React" 
                technology1="Styled components" 
            />
            <Project
                linkProject="https://github.com/DiegoProcopio0/final-maratona-discover"
                linkImage="https://i.ibb.co/RvMy8mb/dev-finances.png"
                title="dev.finances"   
                aboutProject="O dev.finances é uma aplicação de controle financeiro, onde é possível cadastrar e excluir transações e ver o saldo de entrada e saída 💰" 
                technology="HTML"   
                technology1="CSS"   
                technology2="JavaScript" 
            />
        </div>
    )
}