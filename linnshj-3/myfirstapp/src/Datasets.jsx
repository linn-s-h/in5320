import React, { useState } from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import {Menu, MenuItem, Table, TableHead, TableBody, TableRow, TableCell, Tab} from "@dhis2/ui"

const request = {
    request0: {
      resource: "dataSets",
      params: {
        fields: "id,displayName,created",
        paging: "false"
      }
    }
  }

export function Datasets() {

  const { loading, error, data } = useDataQuery(request)
  const [selectedDataset, useSelectedDataset] = useState(null) //Å tukle med useState direkte er fyfy

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }

    if (data) {

      console.log("API response:",data)

      return (
        <div style={{display: "flex", gap: "16px"}}>
          <Menu>
            {data.request0.dataSets.map((ds) => (
              <MenuItem
                key={ds.id}
                label={ds.displayName}
                onClick={() => useSelectedDataset(ds)}
                />
            ))}
          </Menu>
          <div>
          {selectedDataset &&(
            <>
            <h2>Info</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Display Name</strong></TableCell>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Created</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell>{selectedDataset.displayName}</TableCell>
                  <TableCell>{selectedDataset.id}</TableCell>
                  <TableCell>{new Date(selectedDataset.created).toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </>
          )}
    
          </div>
        </div>
      );
    }

}

