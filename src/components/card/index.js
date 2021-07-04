import PropTypes from 'prop-types';
import { CardContainer, CardTitle, CardContent, CardIcon } from './CardElements';

export default function Card({ card }) {
  const { color, title, content, svgIconSrc } = card;

  return (
    <CardContainer color={color}>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <CardIcon src={svgIconSrc} alt={title} />
    </CardContainer>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
