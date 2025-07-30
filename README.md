# 🎉 Arraiá do Terceirão 🎓

Este projeto é um site comemorativo sobre o São João, criado pela turma do 3º Informatica do CETEP. O objetivo é apresentar as tradições dessa festa tão querida no Brasil, especialmente na cidade de Macaúbas. O site foi desenvolvido com HTML e CSS, com recursos visuais, música típica e imagens dinâmicas.

---

## 📁 Estrutura do Projeto

- `index.html`: Arquivo principal com toda a estrutura do site.
- `style.css`: Responsável pela aparência visual do site (cores, fontes, layouts).
- `script.js`: (opcional, usado para funcionalidades extras como popups de imagem).
- Pasta `Imagens/`: contém as imagens usadas no projeto.
- Pasta `quadrilhas/`: imagens específicas das quadrilhas.
- Pasta `músicas/`: contém o áudio da música típica.

---


# 🌐 Explicação do HTML — Arraiá do Terceirão

Este arquivo `index.html` representa a estrutura da página principal do **Arraiá do Terceirão**, organizada por seções e elementos visuais. Abaixo estão as explicações dos principais comandos HTML utilizados.

---

## 🏗️ Estrutura Básica

| Tag | Explicação |
|-----|------------|
| `<!DOCTYPE html>` | Declara o tipo de documento (HTML5). Deve ser a primeira linha do arquivo. |
| `<html lang="en">` | Inicia o documento HTML e define o idioma (neste caso, inglês). |
| `<head>` | Contém configurações e metadados (não visíveis na página). |
| `<body>` | Contém o conteúdo visível da página. |

---

## 🔠 Cabeçalho da Página (`<head>`)

| Tag | Explicação |
|-----|------------|
| `<meta charset="UTF-8">` | Define o padrão de codificação de caracteres (UTF-8), importante para acentos e caracteres especiais. |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Faz a página se adaptar corretamente em celulares. |
| `<link rel="stylesheet" href="style.css">` | Conecta o arquivo de estilos CSS à página. |
| `<link href="...fonts.googleapis...">` | Importa fontes personalizadas do Google Fonts. |
| `<title>` | Define o título da aba do navegador. |

---

## 🧱 Estrutura Visual da Página (`<body>`)

### 1. **Header**

| Tag | Explicação |
|-----|------------|
| `<header>` | Área de topo do site. Aqui contém a imagem principal da página. |
| `<img src="..." alt="...">` | Adiciona uma imagem com endereço (src) e descrição (alt). |

---

### 2. **Seções com `<section>`**

Cada `<section>` representa uma parte diferente do conteúdo:

#### 📌 O que é o São João?

| Tag | Explicação |
|-----|------------|
| `<section class="o-que-e-saojoao">` | Início da seção explicando o São João. A classe é usada para aplicar estilo CSS. |
| `<div class="caixa">` | Uma “caixa” para organizar visualmente o conteúdo. |
| `<h2>` | Título da seção. |
| `<p>` | Parágrafo com explicação. |
| `<div class="arraiasj">` + `<img>` | Imagens lado a lado com fotos temáticas da festa. |

#### 🍽️ Comidas Típicas

| Tag | Explicação |
|-----|------------|
| `<div class="comidas-list">` | Agrupa as comidas típicas. |
| `<div class="comida-item">` | Cada item representa uma comida (nome, imagem e descrição). |
| `<h3>` | Título menor (subtítulo) para cada comida. |

#### 🎉 São João em Macaúbas

| Tag | Explicação |
|-----|------------|
| `<section class="sao-joao-em-macaubas">` | Seção que fala do evento na cidade. |
| `<div class="imagens">` | Grupo de imagens da casinha decorada. |
| `<div class="imgq">` | Imagens das quadrilhas da cidade. |

#### 📜 Tradições do São João

| Tag | Explicação |
|-----|------------|
| `<div class="img-list">` | Lista com blocos que explicam cada tradição. |
| `<div class="img-item">` | Cada item tem um `h3`, uma `img` e um `p`. |

#### 🎶 Música Típica

| Tag | Explicação |
|-----|------------|
| `<img src="..." id="albimg">` | Mostra a capa do álbum musical. |
| `<audio controls>` | Player de áudio para ouvir música direto na página. |

---

## 📱 Redes Sociais e Créditos

| Tag | Explicação |
|-----|------------|
| `<section class="insta">` | Seção com os nomes dos alunos e link para o Instagram. |
| `<span class="pessoa">` | Cada aluno com foto e link para o perfil. |
| `<a href="..." target="_blank">` | Cria um link. `target="_blank"` abre em nova aba. |
| `<img src="..." alt="...">` | Mostra o ícone do Instagram ao lado do nome. |

---

## 🧠 Extras

| Tag | Explicação |
|-----|------------|
| `<script src="script.js"></script>` | Liga um arquivo JavaScript externo para funcionalidades extras (como zoom de imagens). |

---

# 🎨 Explicação do CSS — Arraiá do Terceirão

Este arquivo `style.css` define o visual da página do Arraiá do Terceirão, utilizando propriedades CSS para organizar textos, imagens, cores, efeitos e responsividade.

---

## ✍️ Fontes e Texto

| Comando | Explicação |
|--------|------------|
| `font-family` | Define a fonte do texto (ex: Arial, Poppins, etc.). |
| `font-weight` | Define a espessura da letra (ex: 700 = negrito). |
| `font-style` | Define o estilo da fonte (normal, itálico, etc.). |
| `font-size` | Define o tamanho da letra (em pixels). |
| `text-align` | Alinha o texto (`center`, `left`, `right`). |
| `line-height` | Define o espaço entre as linhas do texto. |

---

## 📏 Espaçamento

| Comando | Explicação |
|--------|-----------|
| `margin` | Espaço externo ao redor do elemento. |
| `padding` | Espaço interno entre o conteúdo e a borda. |
| `margin-top`, `margin-bottom` | Espaço acima ou abaixo do elemento. |
| `gap` | Espaçamento entre elementos dentro de um container flexível. |

---

## 🎨 Cores e Fundo

| Comando | Explicação |
|--------|-----------|
| `background` | Define a cor de fundo de um elemento. |
| `color` | Define a cor do texto. |

---

## 🔲 Bordas e Cantos Arredondados

| Comando | Explicação |
|--------|-----------|
| `border-radius` | Arredonda os cantos de caixas ou imagens. |

---

## 📐 Tamanhos e Proporções

| Comando | Explicação |
|--------|-----------|
| `width` | Define a largura do elemento (ex: `40%`, `300px`). |
| `height` | Define a altura. `auto` mantém a proporção original. |
| `max-width` | Define o tamanho máximo permitido. |
| `object-fit: cover` | Faz a imagem preencher o espaço sem deformar. |

---

## 🧰 Layout com Flexbox

| Comando | Explicação |
|--------|-----------|
| `display: flex` | Ativa o layout flexível para organizar os elementos. |
| `flex-direction` | Define a direção dos elementos (`row`, `column`). |
| `justify-content` | Alinha os elementos no eixo principal. |
| `align-items` | Alinha os elementos no eixo cruzado. |
| `flex-wrap` | Permite que os itens quebrem linha quando necessário. |

---

## 🌟 Efeitos Visuais

| Comando | Explicação |
|--------|-----------|
| `box-shadow` | Adiciona sombra ao redor de elementos. |
| `transition` | Controla a suavidade de mudanças visuais. |
| `transform: scale()` | Aumenta ou diminui o tamanho do elemento. |
| `:hover` | Aplica efeitos quando o mouse passa por cima do elemento. |

---

## 🖱️ Cursor e Interação com o Mouse

| Comando | Explicação |
|--------|-----------|
| `cursor: pointer` | Mostra o ícone de mão ao passar o mouse. |
| `cursor: zoom-in` | Indica que o item pode ser ampliado. |
| `cursor: zoom-out` | Indica que o item pode ser reduzido/fechado. |

---

## ⚙️ Posição e Camadas

| Comando | Explicação |
|--------|-----------|
| `position: fixed` | Fixa o elemento na tela mesmo rolando a página. |
| `top`, `left` | Define a posição do elemento fixo na tela. |
| `z-index` | Define qual elemento fica por cima dos outros. |

---

## 🔗 Links

| Comando | Explicação |
|--------|-----------|
| `text-decoration: none` | Remove o sublinhado padrão dos links. |
| `a:hover` | Altera a aparência do link ao passar o mouse. |

---



