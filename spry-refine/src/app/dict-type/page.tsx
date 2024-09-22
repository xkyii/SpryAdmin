"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigation } from "@refinedev/core";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import Button from "@mui/material/Button";
import React from "react";
import { useGo } from "@refinedev/core";

export default function DictTypeList() {
  const { list } = useNavigation();
  const { dataGridProps } = useDataGrid({});
  const go = useGo();

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "id",
        headerName: "ID",
        type: "number",
        minWidth: 50,
      },
      {
        field: "name",
        flex: 1,
        headerName: "字典类型名称",
        minWidth: 200,
      },
      {
        field: "code",
        flex: 1,
        headerName: "字典类型代码",
        minWidth: 200,
        renderCell: row => (
          <Button sx={{ textTransform: "none" }}
            onClick={() => go({
              to: "dict-data",
              type: "push",
              query: {
                filters: [
                  {
                    field: "type",
                    operator: "eq",
                    value: row.row.code,
                  }
                ]
              }
            })}>
            {row.row.code}
          </Button>
        ),
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row.id} />
              <button onClick={() => list("dept", "push", {
                filters: [
                  {
                    field: "status.text",
                    operator: "eq",
                    value: "On The Way",
                  },
                ],
                pagination: {
                  pageSize: 1000,
                },
              }
              )}>xxx</button>
              <ShowButton hideText recordItemId={row.id} />
              <DeleteButton hideText recordItemId={row.id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid {...dataGridProps} columns={columns} autoHeight />
    </List>
  );
}
