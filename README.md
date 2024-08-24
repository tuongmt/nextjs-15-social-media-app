## Install Packages

# Default

npm i lucia @lucia-auth/adapter-prisma prisma @prisma/client @tanstack/react-query @tanstack/react-query-devtools @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/pm uploadthing @uploadthing/react arctic date-fns ky next-themes react-cropper react-image-file-resizer react-intersection-observer react-linkify-it stream-chat stream-chat-react --legacy-peer-deps

# For Dev

npm i -d prettier eslint-config-prettier prettier-plugin-tailwindcss --legacy-peer-deps

# UI

npx --legacy-peer-deps shadcn-ui@latest init
npx --legacy-peer-deps shadcn-ui@latest add button dialog dropdown-menu form input
label skeleton tabs textarea toast tooltip

# Database

npx prisma init
close any running processes and run (update db): npx prisma db push
open db: npx prisma studio

## Getting Started

npm run dev
