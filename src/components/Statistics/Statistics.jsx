import css from './Statistics.module.css';
import generateRandomColor from './RandomColor.js';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    
  return (<section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

  <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => {          
        return <li key={id} className={css.item}
          style={{ background: generateRandomColor() }}>
       <span className={css.label}>{label }</span>
       <span className={css.percentage}>{percentage}%</span>
      </li>})}
  </ul>
</section>)
}

Statistics.propTypes = {
  stats:PropTypes.array,
  title:PropTypes.string,
  id:PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.number
}