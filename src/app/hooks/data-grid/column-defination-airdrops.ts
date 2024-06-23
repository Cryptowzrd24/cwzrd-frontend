import { useMemo } from 'react';
import { ID } from '@/app/components/data-table/id';
import { ProjectName } from '@/app/components/data-table/project-name';
import { AirdropStatus } from '@/app/components/data-table/airdrop-status';
import { TaskType } from '@/app/components/data-table/task-type';
import { EligibilityPeriod } from '@/app/components/data-table/eligibility-period';

const useColumnAirdropsDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: 70,
          };
        case 'project_name':
          return {
            field: 'project_name',
            headerName: col.headerName,
            cellRenderer: ProjectName,
            width: 195,
          };
        case 'description':
          return {
            field: 'description',
            headerName: col.headerName,
            width: 350,
            valueFormatter: (p: any) => p.value,
          };
        case 'airdrop_status':
          return {
            field: 'airdrop_status',
            headerName: col.headerName,
            width: 165,
            cellRenderer: AirdropStatus,
          };
        case 'task_types':
          return {
            field: 'task_types',
            headerName: col.headerName,
            width: 175,
            cellRenderer: TaskType,
          };
        case 'eligibility_period':
          return {
            field: 'eligibility_period',
            headerName: col.headerName,
            width: 185,
            cellRenderer: EligibilityPeriod,
          };
        case 'cost_to_farm':
          return {
            field: 'cost_to_farm',
            headerName: col.headerName,
            width: 155,
            valueFormatter: (p: any) => p.value,
          };

        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnAirdropsDefs;
