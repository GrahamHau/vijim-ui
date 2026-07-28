"use client";

import { Spotlight as MantineSpotlight, type SpotlightActionData } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

export type { SpotlightActionData };

export type SpotlightSearchProps = {
  actions: SpotlightActionData[];
  placeholder?: string;
  shortcut?: string[] | null;
};

/** 全局命令面板入口；actions 由业务注册 */
export function SpotlightSearch({
  actions,
  placeholder = "搜索页面与操作…",
  shortcut = ["mod + K"],
}: SpotlightSearchProps) {
  return (
    <MantineSpotlight
      actions={actions}
      shortcut={shortcut}
      nothingFound="没有匹配结果"
      highlightQuery
      searchProps={{
        leftSection: <IconSearch size={16} stroke={1.5} />,
        placeholder,
      }}
    />
  );
}

export { spotlight } from "@mantine/spotlight";
