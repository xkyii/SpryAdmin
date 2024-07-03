"use client";

import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import { Show, TextFieldComponent as TextField } from "@refinedev/mui";

export default function CategoryShow() {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />
        <Typography variant="body1" fontWeight="bold">
          {"配置名称"}
        </Typography>
        <TextField value={record?.name} />
        <Typography variant="body1" fontWeight="bold">
          {"配置代码"}
        </Typography>
        <TextField value={record?.code} />
        <Typography variant="body1" fontWeight="bold">
          {"配置内容"}
        </Typography>
        <TextField value={record?.value} />
        <Typography variant="body1" fontWeight="bold">
          {"系统内置"}
        </Typography>
        <TextField value={record?.type} />
      </Stack>
    </Show>
  );
}
