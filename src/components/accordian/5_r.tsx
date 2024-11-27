import cx from '@/components/accordian/cx';
import data from '@/components/accordian/data';

const AccordianItem = ({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
}) => {
  return (
    <li className={cx('item', 'item5')}>
      <input
        type="radio"
        name="accordian"
        id={id}
        className={cx('input')}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  );
};

const Accordian5 = () => {
  return (
    <>
      <h3>
        #5. React <sub>html input(radio)로 처리</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordianItem key={d.id} {...d} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default Accordian5;
