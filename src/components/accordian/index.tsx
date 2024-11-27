import Accordian1 from '@/components/accordian/1_r';
import Accordian2 from '@/components/accordian/2_r';
import Accordian3 from '@/components/accordian/3_r';
import Accordian4V from '@/components/accordian/4_v';
import Accordian5 from '@/components/accordian/5_r';
import Accordian6 from '@/components/accordian/6_r';
import Accordion7 from '@/components/accordian/7_r';
import Accordion8 from '@/components/accordian/8_r';
import cx from '@/components/accordian/cx';

const Accordians = () => {
  const arr = [];

  return (
    <div className={cx('Accordians')}>
      <h2>아코디언</h2>
      <Accordian1 />
      <Accordian2 />
      <Accordian3 />
      <Accordian4V />
      <Accordian5 />
      <Accordian6 />
      <Accordion7 />
      <Accordion8 />
    </div>
  );
};

export default Accordians;
