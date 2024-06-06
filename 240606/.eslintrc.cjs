module.exports = {
    root: true /* 루트 설정 파일임 명시,  상위 디렉토리의 설정 파일을 무시 */,

    /* 환경설정 */
    env: {
        browser: true /* 브라우저 환경 */,
        es2020: true /* ES2020 사용 */,
    },

    /* 확장 */
    extends: [
        "eslint:recommended", // 기본 ESLint 추천 규칙을 사용
        // "plugin:@typescript-eslint/recommended", /* 타입 정보 없이 기본적인 TypeScript 린트 규칙을 사용 */
        "plugin:@typescript-eslint/recommended-type-checked" /* 타입 정보를 활용한 더 정확한 TypeScript 린트 규칙을 사용 */,
        // "plugin:@typescript-eslint/strict-type-checked", /* 엄격한 타입 기반 린트 규칙을 사용하여 높은 코드 품질과 안정성을 유지 */
        "plugin:@typescript-eslint/stylistic-type-checked" /* 타입 정보를 활용한 스타일 체크 규칙을 사용하여 일관된 코딩 스타일을 유지 */,
        "plugin:react-hooks/recommended" /* React Hooks 사용에 대한 추천 린트 규칙을 사용 */,
        "plugin:react/recommended" /* React에 대한 기본 린트 규칙을 사용 */,
        "plugin:react/jsx-runtime" /* JSX 런타임 사용에 대한 린트 규칙을 사용 */,
    ],

    /* 린트에서 무시할 디렉토리 및 파일을 설정 */
    ignorePatterns: ["dist", ".eslintrc.cjs"],

    /* TypeScript 코드를 파싱하기 위해 '@typescript-eslint/parser'를 사용 */
    parser: "@typescript-eslint/parser",

    /* 파서 옵션을 설정 */
    parserOptions: {
        ecmaVersion: "latest" /* 최신 ECMAScript 버전을 사용 */,
        sourceType: "module" /* 모듈 시스템을 사용 */,
        project: [
            "./tsconfig.json",
            "./tsconfig.node.json",
        ] /* 프로젝트의 tsconfig 파일을 지정 */,
        tsconfigRootDir:
            __dirname /* tsconfig 파일의 루트 디렉토리를 현재 디렉토리로 설정 */,
    },

    /* 사용할 플러그인을 설정 */
    plugins: ["react-refresh"],

    /* 사용자 정의 규칙을 설정 */
    rules: {
        "react-refresh/only-export-components": [
            "warn" /* 경고 수준으로 설정 */,
            { allowConstantExport: true } /* 상수로 정의된 export는 허용 */,
        ],
    },
};
