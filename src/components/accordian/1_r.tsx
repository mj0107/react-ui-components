import cx from '@/components/accordian/cx';
import data from '@/components/accordian/data';
import { useState } from 'react';

const AccordianItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('item', { current })}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      {current && <div className={cx('description')}>{description}</div>}
    </li>
  );
};

const Accordian1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #1. React <sub>현재 desc만 html로 그리기</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d) => (
          <AccordianItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordian1;
