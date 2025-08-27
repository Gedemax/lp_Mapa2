# 🚀 Mapa da Personalidade - Multi Terapeutas

Sistema dinâmico de Landing Pages para múltiplas terapeutas usando Next.js e TypeScript.

## 📋 Estrutura do Projeto

```
├── pages/
│   └── [slug].tsx          # Roteamento dinâmico para terapeutas
├── src/
│   ├── components/         # Componentes React
│   ├── data/
│   │   └── terapeutas/     # Dados JSON de cada terapeuta
│   ├── hooks/              # Hooks customizados
│   └── types/              # TypeScript interfaces
└── public/                 # Assets estáticos
```

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd LP-MAPA-2
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Build para produção**
```bash
npm run build
npm run start
```

## 🌐 Como Adicionar Nova Terapeuta

1. **Crie arquivo JSON** em `src/data/terapeutas/[slug].json`:
```json
{
  "slug": "nome-terapeuta",
  "name": "Nome da Terapeuta",
  "title": "Especialidade",
  "bio": "Biografia...",
  "stats": {
    "clientsTransformed": 500,
    "yearsExperience": 5
  },
  "socialLinks": {
    "instagram": "https://instagram.com/...",
    "whatsapp": "https://wa.me/...",
    "youtube": "https://youtube.com/...",
    "telegram": "https://t.me/..."
  },
  "videoUrl": "https://youtube.com/embed/...",
  "checkoutUrl": "https://checkout.com/...",
  "quote": {
    "text": "Frase inspiradora",
    "author": "Nome da Terapeuta"
  }
}
```

2. **Adicione o slug** em `pages/[slug].tsx` no array `getStaticPaths`:
```typescript
const therapists = ['oneida-fernanda', 'nova-terapeuta'];
```

3. **Adicione assets** em `public/therapists/[slug]/`:
- `profile.jpg` - Foto de perfil
- `hero.png` - Imagem principal

## 🚀 Deploy na Vercel

1. **Conecte repositório** na Vercel
2. **Configure domínio** em Vercel Dashboard
3. **Configure DNS** no Cloudflare:
   - Tipo: CNAME
   - Nome: mapa
   - Destino: vercel-deployment-url

## 📱 URLs Finais

- `mapa.souterapeuta.pro/oneida-fernanda`
- `mapa.souterapeuta.pro/nova-terapeuta`

## 🔧 Configurações Importantes

- **SEO**: Cada terapeuta tem meta tags personalizadas
- **Performance**: Imagens otimizadas e lazy loading
- **Responsivo**: Design mobile-first
- **TypeScript**: Tipagem completa para segurança

## 📊 Dados Dinâmicos Suportados

- ✅ Nome e título da terapeuta
- ✅ Biografia e especialidades
- ✅ Estatísticas (clientes transformadas)
- ✅ Links de redes sociais
- ✅ URL do vídeo (YouTube embed)
- ✅ Link do checkout
- ✅ Citação personalizada
- ✅ Depoimentos/testimonials
- ✅ Preços e garantias

## 🛡️ Segurança

- Validação TypeScript
- Sanitização de dados
- Links seguros (noopener noreferrer)
- Fallbacks para dados ausentes
