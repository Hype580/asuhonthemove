import NannyCard from './NannyCard';

const nannies = [
  {
    name: 'Siti Hajidahfaezah Binti Samsani',
    image: '/New_Nannies/Siti Hajidahfaezah Binti Samsani.jpg',
    background: {
      label: 'Background',
      items: ['Childcare']
    },
    education: {
      label: 'Education',
      value: 'Business in Business Administration'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: 'Montessori Education'
    },
    zoom: false
  },
  {
    name: 'Nuraqilah Safwanah Binti Abdullah Mohammad Zimmy',
    image: '/New_Nannies/Nuraqilah Safwanah.jpeg',
    background: {
      label: 'Background',
      items: ['Assistant Nurse']
    },
    education: {
      label: 'Education',
      value: 'NTEC in Assistant Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Hospital Training under Women & Children Centre'
    },
    specialty: {
      label: 'Specialty',
      value: 'Taking care of newborn and children at wards'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 100%'
  },
  {
    name: 'Amal Amirah Binti Mohammad Asri',
    image: '/New_Nannies/Amal Amirah Binti Mohammad Asri.jpg',
    background: {
      label: 'Background',
      items: ['Midwifery']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health in Midwifery'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: 'Newborn Care'
    },
    zoom: true,
    objectPosition: '50% 40%'
  },
  {
    name: 'Nur Shazia Amaya Toledo Binti Abdullah',
    image: '/New_Nannies/Nur Shazia Amaya Toledo Binti Abdullah.jpg',
    background: {
      label: 'Background',
      items: ['Hospitality & Customer Service']
    },
    education: {
      label: 'Education',
      value: 'Diploma in Hospitality Management'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: 'Nurturing Infant & Parenting'
    },
    zoom: true,
    objectPosition: '50% 40%'
  },
  {
    name: 'Tsaqifah bte Roselanzailani',
    image: '/New_Nannies/Tsaqifah bte Roselanzailani.jpg',
    background: {
      label: 'Background',
      items: ['Childcare & Creative Media']
    },
    education: {
      label: 'Education',
      value: 'Diploma in Creative Media'
    },
    experience: {
      label: 'Experience',
      value: 'Bright Kids Kindergarten, Clinic Assistant'
    },
    specialty: {
      label: 'Specialty',
      value: 'Certified Psychological First Aider & Child Development'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 40%'
  },
  {
    name: 'Sheryl Fung Yen Yuan',
    image: '/New_Nannies/Sheryl Fung Yen Yuan.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'SMARTER Internship, Nursing Placement at Pediatric'
    },
    specialty: {
      label: 'Specialty',
      value: 'Child Development, Certified Pediatric First Aider'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 40%'
  },
  {
    name: 'Siti Nurezlynn Binti Haji Zulkiffli',
    image: '/New_Nannies/Siti Nurezlynn Binti Haji Zulkiffli.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Peadiatric Unit at Ripas Hospital'
    },
    specialty: {
      label: 'Specialty',
      value: 'Newborn & Childcare, Certified Pediatric First Aider'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 30%'
  },
  {
    name: 'Nur Rabi\'atul Adawiah Bte Norasmadi',
    image: '/New_Nannies/Nur Rabi.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Healthcare', 'First Aid']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Halal Science'
    },
    experience: {
      label: 'Experience',
      value: 'Personal babysitting for 9 children & volunteering in children\'s programme'
    },
    specialty: {
      label: 'Specialty',
      value: 'Certified First Aider, Newborn Care'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 80%'
  },
  {
    name: 'Nur Syifaa Syafiqah Binti Mukrin',
    image: '/New_Nannies/Nur Syifaa Syafiqah Binti Mukrin.jpg',
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
      value: 'Volunteering through various community programme'
    },
    specialty: {
      label: 'Specialty',
      value: 'Reliable & Caring'
    },
    zoom: false,
  },
  {
    name: 'Erna Dynatasya Binti Duming',
    image: '/New_Nannies/Erna Dynatasya Binti Duming.jpg',
    background: {
      label: 'Background',
      items: ['Environmental Health']
    },
    education: {
      label: 'Education',
      value: 'Level 5 Diploma in Environmental Health'
    },
    experience: {
      label: 'Experience',
      value: 'Personal babysitter'
    },
    specialty: {
      label: 'Specialty',
      value: 'Committed & Reliable, Certified Pediatric First Aider'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 50%'
  },
  {
    name: 'Qurratul\'Ain Syukriyah Binti Haji Shamsul Ariffin',
    image: '/New_Nannies/Qurratul\'Ain Syukriyah Binti Haji Shamsul Ariffin.jpg',
    background: {
      label: 'Background',
      items: ['Technician']
    },
    education: {
      label: 'Education',
      value: 'HNtec in Instrumentation and Control Engineering'
    },
    experience: {
      label: 'Experience',
      value: 'a mother'
    },
    specialty: {
      label: 'Specialty',
      value: 'Newborn Care'
    },
    zoom: false,
  },
  {
    name: 'Dayangku Hani Azimah binti Pengiran Haji Mohd Yussof',
    image: '/New_Nannies/Dayangku Hani Azimah binti Pengiran Haji Mohd Yussof.jpg',
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
    specialty: {
      label: 'Specialty',
      value: 'An Educator'
    },
    zoom: false,
  },
  {
    name: 'Nur Nadiah Binti Sallehkin',
    image: '/New_Nannies/Nur Nadiah Binti Sallehkin.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Obstetrics and Gynecologic Unit in RIPASH'
    },
    specialty: {
      label: 'Specialty',
      value: 'Health-focused Care'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 40%'
  },
  {
    name: 'Hana Humaira Binti Haji Shamsul Osmawi',
    image: '/New_Nannies/Hana Humaira Binti Haji Shamsul Osmawi.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'Maternal and Child Health Clinic'
    },
    specialty: {
      label: 'Specialty',
      value: 'Nursing Support'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 90%'
  },
  {
    name: 'Nur Afiqah Binti Sanoran',
    image: '/New_Nannies/Nur Afiqah Binti Sanoran.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Midwifery'
    },
    experience: {
      label: 'Experience',
      value: 'Maternal Child Health'
    },
    specialty: {
      label: 'Specialty',
      value: 'Midwifery Care & Infant Support'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 90%'
  },
  {
    name: 'Munirah Binti Madeli',
    image: '/New_Nannies/Munirah Binti Madeli.jpg',
    background: {
      label: 'Background',
      items: ['Teacher']
    },
    education: {
      label: 'Education',
      value: 'Bachelor Of Education in Islamic Studies with a Minor in Early Childhood Education'
    },
    experience: {
      label: 'Experience',
      value: 'Tuition Teacher'
    },
    specialty: {
      label: 'Specialty',
      value: 'Islamic & Early Childhood Education'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 90%'
  },
  {
    name: 'Nurshafiqah Binti Husin',
    image: '/New_Nannies/Nurshafiqah Binti Husin.jpg',
    background: {
      label: 'Background',
      items: ['Teacher']
    },
    education: {
      label: 'Education',
      value: 'Higher National Diploma in Religious Teacher'
    },
    experience: {
      label: 'Experience',
      value: 'Babysitting'
    },
    specialty: {
      label: 'Specialty',
      value: 'Islamic Values & Early Learning'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 80%'
  },
  {
    name: 'Dk Nur Haziah Binti Pg Hassani',
    image: '/New_Nannies/Dk Nur Haziah Binti Pg Hassani.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Midwifery'
    },
    experience: {
      label: 'Experience',
      value: 'Midwife, CDC & SMARTER'
    },
    specialty: {
      label: 'Specialty',
      value: 'Special Needs Care & Nursing Support'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 90%'
  },
  {
    name: 'Lim Zhi Ying',
    image: '/New_Nannies/Lim Zhi Ying.jpg',
    background: {
      label: 'Background',
      items: ['Childcare', 'Assistant First Aid Trainer']
    },
    education: {
      label: 'Education',
      value: 'Master of Health Science in Nursing'
    },
    experience: {
      label: 'Experience',
      value: 'RIPAS Hospital & Health Centers'
    },
    specialty: {
      label: 'Specialty',
      value: 'First Aid'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 70%'
  },
  {
    name: 'Didi Iswanie Syahira',
    image: '/New_Nannies/Didi Iswanie Syahira.jpg',
    background: {
      label: 'Background',
      items: ["Caregiver's Assistant"]
    },
    education: {
      label: 'Education',
      value: 'Level 5 Diploma in Interior Design'
    },
    experience: {
      label: 'Experience',
      value: 'SMARTER BACA GIFT Centre'
    },
    specialty: {
      label: 'Specialty',
      value: 'Therapeutic and Educational Activities'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 70%'
  },
  {
    name: 'Hanisah Hannah',
    image: '/New_Nannies/Hanisah Hannah.png',
    background: {
      label: 'Background',
      items: ['Daycare', 'Youth Camps', 'Community Programmes']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Islamic Development Management'
    },
    experience: {
      label: 'Experience',
      value: 'Daycare'
    },
    specialty: {
      label: 'Specialty',
      value: 'Toddlers and Outdoor Activities'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 40%'
  },
  {
    name: 'Shahirah Sutiran',
    image: '/New_Nannies/Shahirah Sutiran.jpg',
    background: {
      label: 'Background',
      items: ['Islamic Educator']
    },
    education: {
      label: 'Education',
      value: "Bachelor's Degree, Minor in Bimbingan Dan Kaunseling Islam"
    },
    experience: {
      label: 'Experience',
      value: 'Teaching'
    },
    specialty: {
      label: 'Specialty',
      value: 'Islamic Value'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 80%'
  },
  {
    name: 'Hjh Bazlaa',
    image: '/New_Nannies/Hjh Bazlaa.jpg',
    background: {
      label: 'Background',
      items: ['Islamic Teaching']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Islamic Development Management'
    },
    experience: {
      label: 'Experience',
      value: 'Personal Babysitter'
    },
    specialty: {
      label: 'Specialty',
      value: 'Infant Care'
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 40%'
  },
  {
    name: 'Nur Nabiilah',
    image: '/New_Nannies/Nur Nabiilah.jpg',
    background: {
      label: 'Background',
      items: ['Halal Law']
    },
    education: {
      label: 'Education',
      value: 'Master of Halal Science (Halal Laws)'
    },
    experience: {
      label: 'Experience',
      value: 'Brunei Darussalam Red Cross Society'
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    zoom: true,
    zoomLevel: 1.1,
    objectPosition: '50% 85%'
  },
  {
    name: 'Rosiani Junaidi',
    image: '/New_Nannies/Rosiani Junaidi.png',
    background: {
      label: 'Background',
      items: ['Caregiver']
    },
    education: {
      label: 'Education',
      value: ''
    },
    experience: {
      label: 'Experience',
      value: '1 year in caregiving'
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    zoom: false,
    objectPosition: '0% 10%'
  },
  {
    name: 'Husniyah Hassani',
    image: '/New_Nannies/Husniyah Hassani.png',
    background: {
      label: 'Background',
      items: ['Law']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Law'
    },
    experience: {
      label: 'Experience',
      value: 'Daycare'
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 30%'
  },
  {
    name: 'Nurameera Jumat',
    image: '/New_Nannies/Nurameera Jumat.png',
    background: {
      label: 'Background',
      items: ['Islamic Early Childhood']
    },
    education: {
      label: 'Education',
      value: 'Degree with Minor in Early Childhood'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    zoom: true,
    zoomLevel: 0.96,
    objectPosition: '50% -10%'
  },
  {
    name: 'Nurhalimatul Hanisa',
    image: '/New_Nannies/Nurhalimatul Hanisa.png',
    background: {
      label: 'Background',
      items: ['Teacher']
    },
    education: {
      label: 'Education',
      value: 'Degree with Minor in Early Childhood'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 30%'
  },
  {
    name: 'Wafa Watsiqah',
    image: '/New_Nannies/Wafa Watsiqah.png',
    background: {
      label: 'Background',
      items: ['Assistant Nurse']
    },
    education: {
      label: 'Education',
      value: ''
    },
    experience: {
      label: 'Experience',
      value: 'Caregiver'
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 70%',
    zoom: true,
    zoomLevel: 1.3,
  },
  {
    name: 'Alicia Lim',
    image: '/New_Nannies/Alicia Lim.JPEG',
    background: {
      label: 'Background',
      items: ['Childcare Experience']
    },
    education: {
      label: 'Education',
      value: 'A Level'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 30%'
  },
  {
    name: 'Norsyahindah Sulaiman',
    image: '/New_Nannies/Norsyahindah Sulaiman.png',
    background: {
      label: 'Background',
      items: ['Islamic Religious Teacher']
    },
    education: {
      label: 'Education',
      value: 'Ijazah Sarjana Muda Perguruan Islam'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 80%',
    zoom: true,
    zoomLevel: 1.05,
  },
  {
    name: 'Siti Nur Amalina',
    image: '/New_Nannies/Siti Nur Amalina.jpg',
    background: {
      label: 'Background',
      items: ['Nursing']
    },
    education: {
      label: 'Education',
      value: 'Bachelor of Health Science in Nursing'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: 'Daycare Experience and SMARTER'
    },
    objectPosition: '50% 90%',
    zoom: true,
    zoomLevel: 1.15,

  },
  {
    name: 'Nur Aiman Syahirah',
    image: '/New_Nannies/Nur Aiman Syahirah.jpg',
    background: {
      label: 'Background',
      items: ['Intern at Pusat Dakwah']
    },
    education: {
      label: 'Education',
      value: 'Bachelor Of Arts In Islamic and Arabic Studies'
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    specialty: {
      label: 'Specialty',
      value: ''
    },
    objectPosition: '50% 35%'
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