import PropTypes from 'prop-types';
import { Label, Li, Percentage, Section, Ul } from './StatisticStyle';
import { getRandomHexColor } from './GetRandom';


export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <title>{title}</title>}
      <Ul>
        {stats.map(({ id, label, percentage }) => (
          <Li key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Li>
        ))}
      </Ul>
    </Section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};