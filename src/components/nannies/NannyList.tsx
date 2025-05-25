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
  {
    name: 'Amal Amirah Binti Mohammad Asri',
    image: '/amal-amirah.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'Midwifery', 'Maternal & Newborn Care']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health in Midwifery'
    },
    experience: {
      label: 'Experience',
      value: 'Clinical Placement at Women and Child centre'
    },
    color: '#C5E6ED',
    circleColor: '#44AEC5',
    zoom: true
  },
  {
    name: 'Hana Naqibah binti Aladin',
    image: '/nanny6.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Psychology', 'Mental Health', 'Child Development']
    },
    education: {
      label: 'Education',
      value: 'Bachelor Degree (Hons) Psychology'
    },
    experience: {
      label: 'Experience',
      value: 'Physcologist JPMC, Talian Harapan, Muzzyland Educare, Pusat Bahagia.'
    },
    color: '#F8E6E6',
    circleColor: '#E7ADAE',
    zoom: true
  },
  {
    name: 'Nahdatulirma Nadirah Binti A. Hamidun',
    image: '/nanny7.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'Child Development', 'Biomedical Science']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Biomedical Science'
    },
    experience: {
      label: 'Experience',
      value: 'Nursing attachment at Berakas Health Centre including Child Development Centre'
    },
    color: '#C5E6ED',
    circleColor: '#44AEC5',
    zoom: true
  },
  {
    name: 'Nur Shazia Amaya Toledo Binti Abdullah',
    image: '/nur-shazia.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Hospitality', 'Customer Service', 'Parenting']
    },
    education: {
      label: 'Education',
      value: 'Diploma in Hospitality Managament'
    },
    experience: {
      label: 'Experience',
      value: 'Customer Service and a mother of two'
    },
    color: '#F8E6E6',
    circleColor: '#E7ADAE',
    zoom: true
  },
  {
    name: 'Siti Nurhanisah bt Hamidon',
    image: '/siti-nurhanisah.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Education', 'Islamic Studies', 'Special Education']
    },
    education: {
      label: 'Education',
      value: 'Bachelor Degree of Religious Teaching (Islamic Education)'
    },
    experience: {
      label: 'Experience',
      value: 'Minor in Special Education in Primary schools, Islamic Studies Teacher'
    },
    color: '#C5E6ED',
    circleColor: '#44AEC5',
    zoom: true
  },
  {
    name: 'Siti Nurrahmah Sabariah Abdullah Abdul Razak',
    image: '/siti-nurrahmah.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Nursing', 'Healthcare', 'Education']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Tution Teacher, and Nursing'
    },
    color: '#F8E6E6',
    circleColor: '#E7ADAE',
    zoom: true
  },
  {
    name: 'Tsaqifah bte Roselanzailani',
    image: '/tsaqifah.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Education', 'Healthcare', 'Creative Media']
    },
    education: {
      label: 'Education',
      value: 'Diploma in Creative Media'
    },
    experience: {
      label: 'Experience',
      value: 'Bright Kids Kindergarden, Clinic Assistant'
    },
    color: '#C5E6ED',
    circleColor: '#44AEC5',
    zoom: true
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