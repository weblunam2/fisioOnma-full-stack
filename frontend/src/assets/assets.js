import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Deportiva',
        image: General_physician
    },
    {
        speciality: 'Traumatologica',
        image: Gynecologist
    },
    {
        speciality: 'Reumatologica',
        image: Dermatologist
    },
    {
        speciality: 'Neurologica',
        image: Neurologist
    }
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ricardo Joval',
        image: doc1,
        speciality: 'Deportivas',
        degree: 'Doctorado',
        experience: '4 Años',
        about: 'Ofrecemos tratamientos para Esguinces, Desgarre Muscular, Espasmo Muscular, Tendinitis, Bursitis, Síndrome del Hombro Doloroso y Fascitis Plantar',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emilia Luna',
        image: doc2,
        speciality: 'Traumatologico',
        degree: 'Doctorado',
        experience: '3 Years',
        about: 'Una de las claves de la fisioterapia traumatológica: evitar los efectos negativos de la inmovilidad. Estos efectos negativos pueden ser sobre la musculatura o sobre el sistema neuromuscular, encontrando también algunos sobre ligamientos o sobre el tejido cartilaginoso. Brindamos tratamientos Post Quirúrgicos, Fractura Post Traumática, Pre-Quirúrgico y Fractura de Cadera.',
        fees: 60,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sergio Paz',
        image: doc3,
        speciality: 'Reumatologia',
        degree: 'Licenciatura',
        experience: '1 Years',
        about: 'Nos enfocamos en aliviar el dolor de pacientes que sufren enfermedades reumatológicas. Este tipo de enfermedades afectan a los músculos, huesos, tendones, articulaciones y fascias, provocando inflamación y dolor. Si padeces de Artritis, Artrosis, Dedo de Gatillo y Fibromialgia, tenemos el mejor tratamiento para ti',
        fees: 30,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologico',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Nos dedicamos al tratamiento de las alteraciones y lesiones ocasionadas por una afectación del Sistema Nervioso central o periférico y que afectan al movimiento, nos centramos en la actividad en mejora de la movilidad del paciente. Atendemos problemas de Parálisis Facial, Síndrome del Túnel Carpiano, Lesión del Nervio CIATICO, Síndrome Piramidal, Parálisis Cerebral Infantil, Estimulación Temprana y Fisioterapia Geriátrica.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologico',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Nos dedicamos al tratamiento de las alteraciones y lesiones ocasionadas por una afectación del Sistema Nervioso central o periférico y que afectan al movimiento, nos centramos en la actividad en mejora de la movilidad del paciente. Atendemos problemas de Parálisis Facial, Síndrome del Túnel Carpiano, Lesión del Nervio CIATICO, Síndrome Piramidal, Parálisis Cerebral Infantil, Estimulación Temprana y Fisioterapia Geriátrica.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc6',
        name: 'Dr. Andres Morales',
        image: doc6,
        speciality: 'Neurologico',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Nos dedicamos al tratamiento de las alteraciones y lesiones ocasionadas por una afectación del Sistema Nervioso central o periférico y que afectan al movimiento, nos centramos en la actividad en mejora de la movilidad del paciente. Atendemos problemas de Parálisis Facial, Síndrome del Túnel Carpiano, Lesión del Nervio CIATICO, Síndrome Piramidal, Parálisis Cerebral Infantil, Estimulación Temprana y Fisioterapia Geriátrica.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc7',
        name: 'Dr. Christian Daluz',
        image: doc7,
        speciality: 'Deportivas',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Se busca la rehabilitación, la atención y la prevención de deportistas amateurs y profesionales, si sufriste alguna lesión como Esguince, Desgarre Muscular, Espasmo Muscular, Tendinitis, Bursitis, Síndrome del Hombro Doloroso o Fascitis Plantar, este servicio es el indicado para ti.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc8',
        name: 'Dr. Tadeo Blanco',
        image: doc8,
        speciality: 'Traumatologico',
        degree: 'Doctorado',
        experience: '3 Years',
        about: 'Una de las claves de la fisioterapia traumatológica: evitar los efectos negativos de la inmovilidad. Estos efectos negativos pueden ser sobre la musculatura o sobre el sistema neuromuscular, encontrando también algunos sobre ligamientos o sobre el tejido cartilaginoso. Brindamos tratamientos Post Quirúrgicos, Fractura Post Traumática, Pre-Quirúrgico y Fractura de Cadera.',
        fees: 60,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc9',
        name: 'Dr. Ana Martinez',
        image: doc9,
        speciality: 'Traumatologico',
        degree: 'Lic',
        experience: '1 Years',
        about: 'Nos enfocamos en aliviar el dolor de pacientes que sufren enfermedades reumatológicas. Este tipo de enfermedades afectan a los músculos, huesos, tendones, articulaciones y fascias, provocando inflamación y dolor. Si padeces de Artritis, Artrosis, Dedo de Gatillo y Fibromialgia, tenemos el mejor tratamiento para ti.',
        fees: 30,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc10',
        name: 'Dr. Zulema Corrales',
        image: doc11,
        speciality: 'Neurologico',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Nos dedicamos al tratamiento de las alteraciones y lesiones ocasionadas por una afectación del Sistema Nervioso central o periférico y que afectan al movimiento, nos centramos en la actividad en mejora de la movilidad del paciente. Atendemos problemas de Parálisis Facial, Síndrome del Túnel Carpiano, Lesión del Nervio CIATICO, Síndrome Piramidal, Parálisis Cerebral Infantil, Estimulación Temprana y Fisioterapia Geriátrica.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc11',
        name: 'Dr. Pedro Hernandez',
        image: doc12,
        speciality: 'Neurologico',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Nos dedicamos al tratamiento de las alteraciones y lesiones ocasionadas por una afectación del Sistema Nervioso central o periférico y que afectan al movimiento, nos centramos en la actividad en mejora de la movilidad del paciente. Atendemos problemas de Parálisis Facial, Síndrome del Túnel Carpiano, Lesión del Nervio CIATICO, Síndrome Piramidal, Parálisis Cerebral Infantil, Estimulación Temprana y Fisioterapia Geriátrica.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc12',
        name: 'Dr. Carla Tapia',
        image: doc13,
        speciality: 'Deportivas',
        degree: 'Doctorado',
        experience: '4 Years',
        about: 'Se busca la rehabilitación, la atención y la prevención de deportistas amateurs y profesionales, si sufriste alguna lesión como Esguince, Desgarre Muscular, Espasmo Muscular, Tendinitis, Bursitis, Síndrome del Hombro Doloroso o Fascitis Plantar, este servicio es el indicado para ti.',
        fees: 50,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc13',
        name: 'Dr. Roberto Martinez',
        image: doc14,
        speciality: 'Traumatologico',
        degree: 'Doctorado',
        experience: '3 Years',
        about: 'Una de las claves de la fisioterapia traumatológica: evitar los efectos negativos de la inmovilidad. Estos efectos negativos pueden ser sobre la musculatura o sobre el sistema neuromuscular, encontrando también algunos sobre ligamientos o sobre el tejido cartilaginoso. Brindamos tratamientos Post Quirúrgicos, Fractura Post Traumática, Pre-Quirúrgico y Fractura de Cadera.',
        fees: 60,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. America Soto',
        image: doc15,
        speciality: 'Reumatologia',
        degree: 'Lic',
        experience: '1 Years',
        about: 'Nos enfocamos en aliviar el dolor de pacientes que sufren enfermedades reumatológicas. Este tipo de enfermedades afectan a los músculos, huesos, tendones, articulaciones y fascias, provocando inflamación y dolor. Si padeces de Artritis, Artrosis, Dedo de Gatillo y Fibromialgia, tenemos el mejor tratamiento para ti.',
        fees: 30,
        address: {
            line1: 'Hidalgo #1536, Col. Centro',
            line2: 'Nvo. Casas Grandes, Chihuhua'
        }

    },
]