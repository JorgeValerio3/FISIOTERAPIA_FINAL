export interface Representative {
    name: string;
    photo: string;
    profile: string;
    contact: string;
}

export interface CountryData {
    id: string;
    name: string;
    flag: string;
    coords: [number, number];
    rep: Representative;
}

const getAvatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff&size=256`;

export const countriesData: CountryData[] = [
    {
        id: "ar", name: "Argentina", flag: "🇦🇷", coords: [-34.6037, -58.3816],
        rep: { name: "Fabiana Giannini", contact: "fabianagiannini@gmail.com", photo: getAvatar("Fabiana Giannini"), profile: "Representante de Argentina en la UFAAL." }
    },
    {
        id: "bo", name: "Bolivia", flag: "🇧🇴", coords: [-16.2902, -63.5887],
        rep: { name: "Adriana Fuentes", contact: "adri18.af@gmail.com", photo: getAvatar("Adriana Fuentes"), profile: "Representante de Bolivia en la UFAAL." }
    },
    {
        id: "br", name: "Brasil", flag: "🇧🇷", coords: [-14.235, -51.9253],
        rep: { name: "Kesia Castro", contact: "kesiamesc@bol.com.br", photo: "/images/kesya_castro.jpeg", profile: "Fisioterapeuta, Prof Educação Física, Presidente da ABFA, CEO Aquatop e Fisiotop. Pós Graduada en Ortopedia e Traumatologia, Especialista em Fisioterapia Aquática. Palestrante Internacional, Experiência em Fisio Aquática há 38 anos." }
    },
    {
        id: "cl", name: "Chile", flag: "🇨🇱", coords: [-35.6751, -71.543],
        rep: { name: "Gloria Aravena O.", contact: "garavena@hotmail.com", photo: getAvatar("Gloria Aravena O."), profile: "Representante de Chile en la UFAAL." }
    },
    {
        id: "co", name: "Colombia", flag: "🇨🇴", coords: [4.5709, -74.2973],
        rep: { name: "Pendiente", contact: "", photo: getAvatar("Pendiente"), profile: "Representante por definir." }
    },
    {
        id: "cr", name: "Costa Rica", flag: "🇨🇷", coords: [9.7489, -83.7534],
        rep: { name: "Jessie Montes de Oca", contact: "", photo: getAvatar("Jessie Montes de Oca"), profile: "Representante de Costa Rica en la UFAAL." }
    },
    {
        id: "ec", name: "Ecuador", flag: "🇪🇨", coords: [-1.8312, -78.1834],
        rep: { name: "Pendiente", contact: "", photo: getAvatar("Pendiente"), profile: "Representante por definir." }
    },
    {
        id: "gt", name: "Guatemala", flag: "🇬🇹", coords: [15.7835, -90.2308],
        rep: { name: "Samuel Adner", contact: "", photo: getAvatar("Samuel Adner"), profile: "Representante de Guatemala en la UFAAL." }
    },
    {
        id: "mx", name: "México", flag: "🇲🇽", coords: [23.6345, -102.5528],
        rep: { name: "Karen Morales Soler", contact: "in_fisiotheros@hotmail.com", photo: getAvatar("Karen Morales Soler"), profile: "Representante de México en la UFAAL." }
    },
    {
        id: "py", name: "Paraguay", flag: "🇵🇾", coords: [-23.4425, -58.4438],
        rep: { name: "Jorge Arce", contact: "", photo: getAvatar("Jorge Arce"), profile: "Representante de Paraguay en la UFAAL." }
    },
    {
        id: "pe", name: "Perú", flag: "🇵🇪", coords: [-9.19, -75.0152],
        rep: { name: "Nohely Rodríguez", contact: "", photo: "/images/nohely_rodriguez.jpeg", profile: "Lic. en Terapia física y rehabilitación egresada de la universidad San Pedro, Chimbote. Formación en Equino terapia, Formación en Fisioterapia acuática y Terapia Manual." }
    },
    {
        id: "pr", name: "Puerto Rico", flag: "🇵🇷", coords: [18.2208, -66.5901],
        rep: { name: "Yara Humarán", contact: "yarahumaran@gmail.com", photo: "/images/yara_humaran.jpeg", profile: "Representante de Puerto Rico en la UFAAL." }
    },
    {
        id: "do", name: "República Dominicana", flag: "🇩🇴", coords: [18.7357, -70.1627],
        rep: { name: "Edgar Ricardo Arias S.", contact: "Edgar1967arias@gmail.com", photo: "/images/edgard_ricardo.jpeg", profile: "Representante de República Dominicana en la UFAAL." }
    },
    {
        id: "uy", name: "Uruguay", flag: "🇺🇾", coords: [-32.5228, -55.7658],
        rep: { name: "María Noel", contact: "noel.fisio@yahoo.com", photo: getAvatar("María Noel"), profile: "Representante de Uruguay en la UFAAL." }
    },
    {
        id: "ve", name: "Venezuela", flag: "🇻🇪", coords: [6.4238, -66.5897],
        rep: { name: "Paola Guevara", contact: "Paoguevaram89@gmail.com", photo: getAvatar("Paola Guevara"), profile: "Representante de Venezuela en la UFAAL." }
    }
];
