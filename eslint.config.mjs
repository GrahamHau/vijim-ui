/**
 * 本仓库内部需要直连 @mantine/* 与原生节点。
 * 应用侧 eslint 禁止这些 import；本包显式关闭。
 */
export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": "off",
      "no-restricted-syntax": "off",
    },
  },
];
