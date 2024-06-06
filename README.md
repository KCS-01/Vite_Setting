# Vite 프로젝트 생성

```sh
npm create vite@latest
# Project_Name
# React
# TypeScript + SWC

# 혹은

npm create vite@latest [Project_Name]

cd Project_Name

npm install
```

## SWC(Speedy Web Compiler) ??

Rust 기반의 고성능 자바스크립트 / 타입스크립트 컴파일러

<br />

## 초기설정

### ESLint

코드 품질 확인 및 버그, 안티패턴(Anti-Pattern) 감지

> ESLint 설치

### Prettier - Code Formatter

코드 스타일 및 포맷팅 관리, 일관된 코드 스타일 적용

> Prettier - Code formatter 설치

### ESLint && Prettier 설치

```bash
## For JavaScript
npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier

## For TypeScript
npm i -D eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- **eslint**
    - ESLint 코어 패키지
    - 코드 품질 확인 및 버그
    - 안티패턴(Anti-pattern)을 감지

- **prettier**
    - Prettier 코어 패키지
    - 코드 스타일 및 포맷팅 관리
    - 일관된 코드 스타일을 적용 가능

- **eslint-plugin-react**
    - React 지원 플러그인, 문법 분석 및 검사 지원

- **eslint-config-prettier**
    - ESLint와 Prettier의 충돌 방지

- **eslint-plugin-prettier**
    - Prettier 규칙을 ESLint 규칙으로 통합

- **@typescript-eslint/eslint-plugin**
    - 타입스크립트 지원 플러그인

- **@typescript-eslint/parser**
	- 타입스크립트 코드 분석 및 검사 지원

- **eslint-plugin-react-hooks**
	- React Hooks 사용 규칙을 강제
    - 실수를 방지에 도움이 되는 규칙 제공
    - Vite에 포함됨

- **eslint-plugin-react-refresh**
	- React Refresh 사용 규칙 제공

### 설정파일

#### for JS
```json
/******************/
/* .eslintrc.json */
/******************/

{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "react",
    "prettier"
  ]
}
```

#### for TS

```json
/******************/
/* .eslintrc.json */
/******************/

{
   /* 기본 설정을 확장 */
  "extends": [
    "eslint:recommended", // ESLint의 권장 설정
    "plugin:@typescript-eslint/recommended", // TypeScript ESLint 플러그인의 권장 설정
    "plugin:react/recommended", // React ESLint 플러그인의 권장 설정
    "plugin:prettier/recommended" // Prettier와 ESLint 통합
  ],

  /* 사용할 플러그인 지정 */
  "plugins": [
    "react", /* react -->  React ESLint 플러그인 */
    "prettier" /* prettier -->  prettier ESLint 플러그인 */
  ],

  /* 파서 옵션 설정 */
  "parserOptions": {
    "parser": "@typescript-eslint/parser" // ESLint가 TypeScript 문법을 이해할 수 있도록 설정
  }
}
```

#### VS Code 설정

```json
/*****************/
/* settings.json */
/*****************/

{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 경로 별칭(Alias) 구성

프로젝트 내의 파일을 쉽게 참조

```tsx
/******************/
/* vite.config.ts */
/******************/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'node_modules', replacement: '/node_modules' }
    ]
  }
})
```

#### TypeScript 별칭

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"],
      "node_modules/*": ["./node_modules/*"]
    }
  }
}
```