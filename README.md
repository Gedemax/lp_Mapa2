# Mapa da Personalidade - Landing Page

Landing page dinâmica para múltiplas terapeutas especializadas em análise comportamental.

## 🚀 Estrutura do Projeto

- **Dados Dinâmicos**: Cada terapeuta tem seu próprio arquivo JSON em `/src/data/terapeutas/`
- **Roteamento**: URLs amigáveis como `/oneida-fernanda`
- **Responsivo**: Design otimizado para desktop e mobile
- **Deploy**: Configurado para Vercel com domínio personalizado

## 📁 Estrutura de Arquivos

```
src/
├── components/          # Componentes React
├── data/
│   └── terapeutas/     # Dados específicos de cada terapeuta
│       └── oneida-fernanda.json
├── hooks/              # Custom hooks
│   └── useTerapeutaData.ts
└── ...
```

## 🛠️ Como Adicionar Nova Terapeuta

1. Crie um novo arquivo JSON em `/src/data/terapeutas/nome-terapeuta.json`
2. Copie a estrutura do arquivo `oneida-fernanda.json`
3. Atualize os dados específicos da nova terapeuta
4. A URL será automaticamente `/nome-terapeuta`

## 🌐 Deploy

- **Plataforma**: Vercel
- **Domínio**: mapa.souterapeuta.pro
- **DNS**: Gerenciado pela Cloudflare

## 📱 URLs Disponíveis

- `/oneida-fernanda` - Landing page da Oneida Fernanda
- `/` - Redireciona para `/oneida-fernanda`

## 🔧 Comandos

```bash
npm install     # Instalar dependências
npm run dev     # Servidor de desenvolvimento
npm run build   # Build para produção
npm run preview # Preview do build
```
