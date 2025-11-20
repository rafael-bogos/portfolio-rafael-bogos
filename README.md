# 💼 Portfólio Profissional - Rafael Bogos

Um portfólio moderno e interativo desenvolvido com Next.js 15, React 19 e Tailwind CSS 4, com foco em design minimalista e estética de código.

## ✨ Features

- 🎨 **Design Moderno**: Interface com tema dark e gradientes purple/cyan
- 💻 **Tema de Código**: Elementos visuais inspirados em terminal e editores de código
- ⚡ **Animações Suaves**: Framer Motion para transições e micro-interações
- 📱 **Totalmente Responsivo**: Design adaptável para todos os dispositivos
- 🎯 **Partículas Interativas**: Background com efeito de estrelas
- ⌨️ **Efeito de Digitação**: Animação de typing no hero
- 🗺️ **Timeline Visual**: Seção About com linha do tempo interativa
- 🛠️ **Tech Stack Cards**: Projetos com tecnologias destacadas
- 📬 **Formulário de Contato**: Integrado com FormSubmit

## 🚀 Tecnologias

- **Framework**: Next.js 15 (com Turbopack)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animações**: Framer Motion
- **Ícones**: React Icons
- **Animações Lottie**: Lottie React
- **Partículas**: React TSParticles
- **Validação**: Zod
- **Tipagem**: TypeScript

## 📦 Estrutura do Projeto

```
portfolio-dev/
├── app/
│   ├── componentes/
│   │   ├── navbar.tsx         # Navegação fixa
│   │   ├── hero.tsx           # Seção inicial com typing effect
│   │   ├── about.tsx          # Sobre com timeline
│   │   ├── projects.tsx       # Projetos com tech stack
│   │   ├── skills.tsx         # Skills com progress bars
│   │   ├── contact.tsx        # Formulário de contato
│   │   └── footer.tsx         # Rodapé
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Home page
├── public/
│   └── rocket-launch.json     # Animação Lottie
└── package.json
```

## 🎨 Customização

### Atualizar Informações Pessoais

1. **Navbar** (`componentes/navbar.tsx`):
   - Atualizar links sociais
   - Modificar seções do menu

2. **Hero** (`componentes/hero.tsx`):
   - Editar roles no array `roles`
   - Personalizar mensagens

3. **About** (`componentes/about.tsx`):
   - Modificar timeline com sua experiência
   - Atualizar descrição

4. **Projetos** (`componentes/projects.tsx`):
   - Adicionar seus projetos reais no array `projects`
   - Incluir tech stack de cada projeto

5. **Skills** (`componentes/skills.tsx`):
   - Atualizar arrays `frontEndSkills` e `backEndSkills`
   - Ajustar níveis de proficiência

6. **Contato** (`componentes/contact.tsx`):
   - Configurar e-mail no FormSubmit

## 🛠️ Instalação e Uso

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📝 Próximos Passos

- [ ] Adicionar seus projetos reais
- [ ] Atualizar timeline com suas experiências
- [ ] Configurar meta tags para SEO
- [ ] Adicionar Google Analytics
- [ ] Criar versão em inglês (i18n)
- [ ] Adicionar blog/artigos
- [ ] Implementar tema claro/escuro

## 🎯 Deploy

Recomendado para deploy:
- [Vercel](https://vercel.com) (recomendado para Next.js)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

```bash
# Deploy na Vercel
npm i -g vercel
vercel
```

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

## 🤝 Contato

- GitHub: [@rafael-bogos](https://github.com/rafael-bogos)
- LinkedIn: [rafael-bogos](https://linkedin.com/in/rafael-bogos)
- Email: rafaelbogosbr10@gmail.com

---

**Desenvolvido com 💜 e muito código por Rafael Bogos**

