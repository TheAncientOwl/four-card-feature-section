import TeamBuilderIcon from './images/icon-team-builder.svg';
import KarmaIcon from './images/icon-karma.svg';
import CalculatorIcon from './images/icon-calculator.svg';
import SupervisorIcon from './images/icon-supervisor.svg';

const CardsConfig = {
  teamBuilder: {
    color: 'hsl(0, 78%, 62%)',
    title: 'Team Builder',
    content: 'Scans our talent network to create the optimal team for your project',
    svgIconSrc: TeamBuilderIcon,
  },
  karma: {
    color: 'hsl(34, 97%, 64%)',
    title: 'Karma',
    content: 'Regularly evaluates our talent to ensure quality',
    svgIconSrc: KarmaIcon,
  },
  calculator: {
    color: 'hsl(212, 86%, 64%)',
    title: 'Calculator',
    content: 'Uses data from past projects to provide better delivery estimates',
    svgIconSrc: CalculatorIcon,
  },
  supervisor: {
    color: 'hsl(180, 62%, 55%)',
    title: 'Supervisor',
    content: 'Monitors activity to identify project roadblocks',
    svgIconSrc: SupervisorIcon,
  },
};

Object.freeze(CardsConfig);
export default CardsConfig;
