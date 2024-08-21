import { Select } from 'antd';
import './index.scss';

const CompareCoin = ({ setSelectedCompareCoinId, compareData }: any) => {
  return (
    <Select
      showSearch
      style={{
        width: 180,
        height: 40,
        position: 'relative',
        top: '20px',
        fontFamily: 'Sf Pro Display',
        color: '#11111199',
      }}
      rootClassName={'compareCoinSelect'}
      placeholder="Compare with"
      fieldNames={{ label: 'name', value: 'coin_id' }}
      optionFilterProp="name"
      onChange={setSelectedCompareCoinId}
      filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
      }
      options={compareData}
    />
  );
};

export default CompareCoin;
