import css from './Statistics.module.css';
import data from '../../data.json';
import generateRandomColor from './RandomColor.js';

export const Statistics = () => {
  if (!data) {
    return
  }

  return (<section className={css.statistics}>
  <h2 className={css.title}>upload stats</h2>

  <ul className={css.stat_list}>
        {data.map(({ id, label, percentage }) => {          

          return <li key={id} className={css.item}
            style={{ background: generateRandomColor() }}>
         <span className={css.label}>{label }</span>
         <span className={css.percentage}>{percentage}%</span>
        </li>})}
  </ul>
</section>)
}