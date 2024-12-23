import cx from '@/components/tabMenu/cx';
import data from '@/components/tabMenu/data';
import { useState } from 'react';

const TabItem = ({
  id,
  title,
  current,
  toggle,
}: {
  id: string;
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('tab', { current })} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  const currentDescription =
    data.find((item) => item.id === currentId)?.description || '';

  return (
    <>
      <h3>
        #1. React <sub>현재 desc만 html로 그리기</sub>
      </h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map((d) => (
            <TabItem
              key={d.id}
              {...d}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </ul>
        <div className={cx('description')}>{currentDescription}</div>
      </div>
    </>
  );
};

export default TabMenu1;
