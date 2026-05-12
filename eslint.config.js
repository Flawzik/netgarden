import globals from "globals";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.node, // Это разрешит использование process, __dirname и т.д.
            },
        },
    },
];