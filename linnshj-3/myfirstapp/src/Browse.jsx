import React from "react";
import { useDataQuery } from '@dhis2/app-runtime';
import {
  Table, 
  TableHead, 
  TableBody, 
  TableRow, 
  TableCell
} from "@dhis2/ui"

const dataQuery = {
  dataSets: {
      resource: 'dataSets/aLpVgfXiz0f',
      params: {
          fields: [
              'name',
              'id',
              'dataSetElements[dataElement[id, displayName]',
          ],
      },
  },
  dataValueSets: {
      resource: 'dataValueSets',
      params: {
          orgUnit: 'KiheEgvUZ0i',
          dataSet: 'aLpVgfXiz0f',
          period: '2020',
      },
  },
}

function mergeData(data) {

  const dataSetsItems = data?.dataSets?.dataSetElements || []
  const dataValueSetsItems = data?.dataValueSets?.dataValues || []

  //Map elements to their values 
  const items = dataSetsItems.map((item) => {
    const match = dataValueSetsItems.find(
      (v) => v.dataElement === item.dataElement.id
    )
    return {
      displayName: item.dataElement.displayName,
      id: item.dataElement.id,
      value: match.value
    }
  })
  return items
}


export function Browse() {

  const { loading, error, data } = useDataQuery(dataQuery)

  if (error) {
    return <span>ERROR: {error.message}</span>
  }

  if (loading) {
      return <span>Loading...</span>
  }

  if (data) {
    let mergedData = mergeData(data)
    console.log("API response:",mergedData)
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
            {mergedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.displayName}</TableCell>
                <TableCell>{item.value}</TableCell>
                <TableCell>{item.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

