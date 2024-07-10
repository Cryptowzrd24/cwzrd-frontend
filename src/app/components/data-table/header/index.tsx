'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import styles from './index.module.css';

import { IHeaderParams } from 'ag-grid-community';

import infoIcon from '@/app/assets/icons/infoIcon.svg';

import { formatDisplayName } from '@/utils/format-heder-display-name';
import { Tooltip } from '@mui/material';
import { HeaderTooltip } from '../../header-tooltip';

export const HeaderComponent = (props: IHeaderParams) => {
  const displayName = formatDisplayName(props.displayName);

  const onSortRequested = useCallback(
    (order: 'asc' | 'desc' | null) => {
      props.columnApi.applyColumnState({
        state: [{ colId: props.column.getColId(), sort: order }],
        applyOrder: false,
      });
    },
    [props.columnApi, props.column],
  );

  const onHeaderClick = () => {
    const currentSort = props.column.getSort();
    let nextSort: 'asc' | 'desc' | null;
    if (currentSort === 'asc') {
      nextSort = 'desc';
    } else if (currentSort === 'desc') {
      nextSort = null;
    } else {
      nextSort = 'asc';
    }
    onSortRequested(nextSort);
  };

  return (
    <div className={styles['header-component']} onClick={onHeaderClick}>
      <p className="text-primary text-sm font-semibold">{displayName}</p>
      <Tooltip
        title={<HeaderTooltip headerName={props.displayName} />}
        arrow={false}
        classes={{ tooltip: styles['custom-tooltip'] }}
      >
        <Image className={styles['info-icon']} src={infoIcon} alt="" />
      </Tooltip>
    </div>
  );
};
