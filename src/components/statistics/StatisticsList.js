import PropTypes from 'prop-types';
import StatisticsListItem from './StatisticsListItem';
import s from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <div>
      <section className="statistics">
        <ul className={s.statList}>
          {stats.map(({ label, id, percentage }) => (
            <li className={s.statListItem} key={id}>
              <StatisticsListItem label={label} percentage={percentage} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
Statistics.propTypes = {
  id: PropTypes.number,
};
