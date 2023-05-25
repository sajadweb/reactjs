## install
```bash
 npx create-next-app@latest nextui
✔ Would you like to use TypeScript with this project? …  / Yes
✔ Would you like to use ESLint with this project? …  / Yes
✔ Would you like to use Tailwind CSS with this project? … No 
✔ Would you like to use `src/` directory with this project? …   Yes
✔ Use App Router (recommended)? … Yes
✔ Would you like to customize the default import alias? … No
```

## start in dev
```npm run dev```

```tsx

 window.location.href = '/blog/23'

import { useRouter } from 'next/router'
export default function TodoShow(props:any) {
    const router = useRouter()
    .....
}
 ```