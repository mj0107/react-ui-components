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
    <li className={cx('item', 'item3', { current })}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  );
};

const Accordian3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #3. React <sub>css animation (transition)</sub>
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

export default Accordian3;
