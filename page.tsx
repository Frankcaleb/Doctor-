"use client";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
const page = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Dr Olayide', col2: 'Lab Techinician',  },
    { id: 2, col1: 'Dr Moses', col2: 'Neuro Surgeon'},
    { id: 3, col1: 'Dr Kazeem', col2: 'Dentust' },
    { id: 4, col1: 'Dr Ebuka', col2: 'Ophthamologist' },
    { id: 5, col1: 'Dr Ayodeji', col2: 'Surgeon' },
    { id: 6, col1: 'DR Favour', col2: 'Pschologist' },
    { id: 7, col1: 'Dr Solomon', col2: 'Cardiologist' },
    { id: 8, col1: 'Dr Kachi', col2: 'Neuro Surgeon' },
    { id: 9, col1: 'Dr Kosi', col2: 'Surgeon' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Employee', width: 400 },
    { field: 'col2', headerName: 'Department', width: 400 },
    
    
  ];
  return (
    <div className="m-10">
      <h2 className="flex item-center justify-center font-semibold mb-2">Doctors</h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default page;
