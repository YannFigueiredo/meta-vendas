# Meta Vendas
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/YannFigueiredo/meta-vendas/blob/main/LICENSE) 

# Sobre o projeto

https://metavendas.netlify.app/

Aplicativo Web que lista as metas de vendas batidas por vendedores fictícios e ainda notifica-os, quando o usuário clica no botão de notifcar, sobre a meta diária atinjida.

## Layout
<img src="https://github.com/YannFigueiredo/assets/blob/main/meta-vendas/tela-home.png"  alt="Tela Página Inicial" title="Página inicial"/>
<img src="https://github.com/YannFigueiredo/assets/blob/main/meta-vendas/tela-notificacao.png"  alt="Tela de serviço paar receber notificação" title="Página para visualizar a notificação SMS"/>

### Observação: A segunda tela, mostrada acima, é de um serviço externo que disponibiliza um número de telefone público para receber SMS. As notifcações geradas nessa aplicação são enviadas para esse serviço da segunda tela, onde dentro de alguns instantes aparece a notificação na caixa de entrada pública, como mostrado em destaque na imagem acima.

# Tecnologias utilizadas
## Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven
- H2 Database
- Twilio (Serviço de SMS)

## Front end
- HTML / CSS / JavaScript / TypeScript
- ReactJS
- Styled Components
- Axios
- Context API

## Implantação em produção
- Back end: Heroku
- Front end: Netlify

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/YannFigueiredo/meta-vendas
# entrar na pasta do projeto back end
cd backend
# executar o projeto
./mvnw spring-boot:run
```

## Front end
Pré-requisitos: npm / yarn  e NodeJs

```bash
# clonar repositório
git clone https://github.com/YannFigueiredo/meta-vendas
# entrar na pasta do projeto front end
cd frontend
# instalar dependências
npm install
# executar o projeto
npm start run
```

# Autor

Yann Fabricio Cardoso de Figueiredo

https://www.linkedin.com/in/yann-figueiredo-5a5046102/

