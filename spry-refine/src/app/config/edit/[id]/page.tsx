"use client";

import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function CategoryEdit() {
  const {
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.name}
          helperText={(errors as any)?.name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"配置名称"}
          name="name"
        />
        <TextField
          {...register("code", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.code}
          helperText={(errors as any)?.code?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"配置代码"}
          name="code"
        />
        <TextField
          {...register("value", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.value}
          helperText={(errors as any)?.value?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"配置内容"}
          name="value"
        />
        <TextField
          {...register("code", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.type}
          helperText={(errors as any)?.type?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"系统内置"}
          name="type"
        />
      </Box>
    </Edit>
  );
}
