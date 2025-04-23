import NannyCard from './NannyCard';

const nannies = [
  {
    name: 'Siti Nurdarenah Bte Tahier',
    image: '/untitled_design_720.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Islamic Teaching']
    },
    education: {
      label: 'Education',
      value: 'Degree in Shariah'
    },
    experience: {
      label: 'Experience',
      value: 'Personal experience as a mother'
    },
    color: '#F8E6E6',
    circleColor: '#E7ADAE'
  },
  {
    name: 'Siti Hajidahfaezah Binti Samsani',
    image: '/untitled_design_720.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Education']
    },
    education: {
      label: 'Education',
      value: 'Diploma in Business Administration'
    },
    experience: {
      label: 'Experience',
      value: 'Assistant Teacher, Clinic Assistant'
    },
    color: '#C5E6ED',
    circleColor: '#44AEC5'
  },
  {
    name: 'Dayangku Nur Haziyah Bte PG Hj Sallehudin',
    image: '/nanny3.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Marketing']
    },
    education: {
      label: 'Education',
      value: 'Higher National Diploma in Business (Marketing) from Laksamana College of Business, Brunei'
    },
    experience: {
      label: 'Experience',
      value: 'Hands-on experience in childcare, trained by expert team'
    },
    color: '#F8E6E6',
    circleColor: '#E7ADAE'
  },
];

export default function NannyList() {
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 mt-8 md:mt-16 mb-16 md:mb-24">
      {nannies.map((nanny) => (
        <NannyCard
          key={nanny.name}
          {...nanny}
        />
      ))}
    </div>
  );
} 