import React from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import {Table, TableHead, TableBody, TableRow, TableCell, Tab} from "@dhis2/ui"

const request = {
  request0: {
    resource: "dataSets",
    params: {
      fields: "displayName,id",
      paging: "false"
    }
  }
}

export function Browse() {

  const { loading, error, data } = useDataQuery(request)

  if (error) {
    return <span>ERROR: {error.message}</span>
}

if (loading) {
    return <span>Loading...</span>
}

if (data) {

  console.log("API response:",data)

  const items = data?.request0?.dataSets || []

  return (
    <div style={{display: "flex", gap: "16px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Display Name</strong></TableCell>
            <TableCell><strong>Value</strong></TableCell>
            <TableCell><strong>ID</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.displayName}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
     
    </div>
  );
}
}
