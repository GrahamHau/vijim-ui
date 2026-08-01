# `@vijimlabs/ui` · AGENTS.md

> 本文件约束 `packages/ui/`。上位规则是仓库根 `AGENTS.md`；组件和 token 的运行真源分别见 `SURFACE.md`、`COLOR.md` 与 `TYPOGRAPHY.md`。

## 角色

`@vijimlabs/ui` 是 VIJIM Labs 唯一业务 UI 出口。它负责跨系统共享的组件语义、主题、状态、密度和交互，不承载某一个业务系统的页面 IA 或业务流程。

## 写代码前的判断顺序

1. 先确认现有语义组件是否已经覆盖需求；能通过现有 props / variant 表达时，不新增组件。
2. 现有组件缺少且两个以上子系统会复用的能力，才在本包补一个语义组件或 variant。
3. 只有 Material / GTM / Studio 某一页需要的布局，留在业务子系统；不得为了局部样式把业务组件塞进本包。
4. 同一职责只保留一个组件名。视觉差异使用语义 props，不创建 `Better*`、`New*`、`Feishu*`、`Apple*` 等平行门面。

## 代码护栏

- Mantine、Tabler、Recharts 只可作为包内实现；不得把其组件、类型或 props 方言直接导出给业务。
- 颜色、字号、圆角、阴影、控件高度、间距和动效必须来自现有 token；不要在组件里新增无语义的魔数。
- 默认 Select / SearchableSelect 不出现清空叉；只有明确的“清除筛选 / 重置搜索”语义才允许 `clearable`。
- 组件必须同时定义 default、hover、focus-visible、disabled、loading、selected / open（适用时）状态；状态不能只靠颜色区分。
- 新增或改变公开 API 时，同步更新 `SURFACE.md` 和 `README.md`；合入 main 后代码与文档必须一致。

## 验证节奏

- 连续视觉微调：`npm run dev` 对应业务预览 + 当前页面定点验收。
- 共享组件阶段收口：`npm run typecheck && npm run build`，再在至少一个真实消费者页面验证。
- 合并 / 发布前：复验所有受影响消费者的桌面与窄屏、键盘操作、console；不得只看 Storybook、截图或静态 Demo。
