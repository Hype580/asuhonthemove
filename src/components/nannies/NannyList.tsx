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
    zoom: false
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
    zoom: false
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
    zoom: false
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
    zoom: true,
    objectPosition: '50% 40%'
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
    zoom: true,
    zoomLevel: 1.6,
    objectPosition: '50% 40%'
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
      value: 'Diploma in Hospitality Management'
    },
    experience: {
      label: 'Experience',
      value: 'Customer Service and a mother of two'
    },
    zoom: true,
    objectPosition: '50% 40%'
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
    zoom: true,
    objectPosition: '50% 25%'
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
      value: 'Bright Kids Kindergarten, Clinic Assistant'
    },
    zoom: true,
    objectPosition: '50% 50%'
  },
  {
    name: 'Sheryl Fung Yen Yuan',
    image: '/new_nanny.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'SMARTER Internship, Nursing Placement at Pediatric'
    },
    zoom: true,
    objectPosition: '50% 41%'
  },
  {
    name: 'Siti Nurezlynn Binti Haji Zulkiffli',
    image: '/nanny8.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'Nursing']
    },  
    education: {
      label: 'Education',
      value: 'Bachelor of Health in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Peadiatric Unit at Ripas Hospital'
    },
    zoom: true,
    objectPosition: '50% 20%'
  },
  {
    name: 'Nur Rabi\'atul Adawiah Bte Norasmadi',
    image: '/Norasmadi.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'First Aid']
    },  
    education: {
      label: 'Education',
      value: 'Bachelor of Halal Science | Certified Basic First Aider'
    },
    experience: {
      label: 'Experience',
      value: 'Personal babysitting for 9 childrens & volunteering in children programme taking care of their safety while doing outdoor activies.'
    },
    zoom: true,
    objectPosition: '60% 50%'
  },
  {
    name: 'Nur Syifaa Syafiqah Binti Mukrin',
    image: '/Mukrin.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Business Management', 'Community Service']
    },  
    education: {
      label: 'Education',
      value: 'Bachelor of Business Management UNISSA'
    },
    experience: {
      label: 'Experience',
      value: 'Volunteering through various community programmes'
    },
    zoom: true,
    objectPosition: '55% 40%'
  },
  {
    name: 'Nur Syahzani Syaziyah Suhailah Binti Zaini',
    image: '/Zaini.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Tourism Management', 'Culinary Arts']
    },  
    education: {
      label: 'Education',
      value: 'Pursuing Bachelor in Internation Tourism Management | Apprentice in Professional Cooking'
    },
    experience: {
      label: 'Experience',
      value: 'Private personal babysitting for a family with 4 children'
    },
    zoom: true,
    zoomLevel: 1.8,
    objectPosition: '48% 50%'
  },
  {
    name: 'Erna Dynatasya binti Duming',
    image: '/nannies/binti_duming.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Environmental Health']
    },
    education: {
      label: 'Education',
      value: 'Level 5 Diploma in Environmental Health'
    },
    experience: {
      label: 'Experience',
      value: 'Personal babysitter'
    },
    zoom: true,
    zoomLevel: 2,
    objectPosition: '50% 50%'
  },
  {
    name: 'Qurratul\'Ain Syukriyah Binti Haji Shamsul Ariffin',
    image: '/nannies/Shamsul_Ariffin.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Technician']
    },
    education: {
      label: 'Education',
      value: 'HNtec in Instrumentation and Control Engineering'
    },
    experience: {
      label: 'Experience',
      value: 'Trainer, a mother'
    },
    zoom: true,
    objectPosition: '50% 30%'
  },
  {
    name: 'Dayangku Hani Azimah binti Pengiran Haji Mohd Yussof',
    image: '/nannies/Mohd_Yussof.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Teacher']
    },
    education: {
      label: 'Education',
      value: 'Bachelor Degree of Science in Mathematics'
    },
    experience: {
      label: 'Experience',
      value: 'Primary Teacher'
    },
    zoom: true,
    zoomLevel: 1.8,
    objectPosition: '45% 40%'
  },
  {
    name: 'Filza Hazeerah Binti Norazlan',
    image: '/nannies/Binti_Norazlan.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Special Needs Teacher']
    },
    education: {
      label: 'Education',
      value: 'Early Childhood Educator'
    },
    experience: {
      label: 'Experience',
      value: 'Montessori Directress, Teacher, Nursery Caretaker'
    },
    zoom: true,
    objectPosition: '50% 32%'
  },
  {
    name: 'Nur Nadiah Binti Sallehkin',
    image: '/nannies/Binti_Sallehkin.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'General Nursing'
    },
    zoom: true,
    objectPosition: '50% 40%'
  },
  {
    name: 'Dk Nur Haziah Binti Pg Hassani',
    image: '/nannies/Binti_Pg_Hassani.png',
    background: {
      label: 'Background',
      items: ['Childcare', 'Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Midwifery'
    },
    experience: {
      label: 'Experience',
      value: 'Midwife, CDC & SMARTER'
    },
    zoom: true,
    zoomLevel: 1.6,
    objectPosition: '50% 40%'
  },
  
];

export default function NannyList() {
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-10 mt-8 md:mt-16 mb-16 md:mb-24">
      {nannies.map((nanny, index) => {
        // Determine colors based on odd/even index (0-based, so we add 1 to make it 1-based)
        const isOdd = (index + 1) % 2 === 1;
        const color = isOdd ? '#F8E6E6' : '#C5E6ED';
        const circleColor = isOdd ? '#E7ADAE' : '#44AEC5';
        
        return (
          <NannyCard
            key={nanny.name}
            {...nanny}
            color={color}
            circleColor={circleColor}
          />
        );
      })}
    </div>
  );
} 