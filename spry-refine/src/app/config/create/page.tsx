"use client";

import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export default function CategoryCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
  } = useForm({});

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
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
          {...register("type", {
            required: "This field is required",
            pattern: { value: /^[YN]$/i, message: "Y or N" },
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
    </Create>
  );
}
