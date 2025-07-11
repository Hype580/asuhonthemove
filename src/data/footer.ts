export interface ILocation {
  name: string;
}

export interface IFooterDetails {
  locations: ILocation[];
  contact: {
    phone: string;
    email: string;
  };
  socials: {
    instagram: string;
    whatsapp: string;
    linktree: string;
  };
}

export const footerDetails: IFooterDetails = {
  locations: [
    {
      name: "Tutong"
    },
    {
      name: "Kuala Belait"
    },
    {
      name: "Bandar Seri Begawan"
    },
    {
      name: "Temburong"
    }
  ],
  contact: {
    phone: "+673 819 7773",
    email: "contact@asuhonthemove.com"
  },
  socials: {
    instagram: "https://www.instagram.com/asuhonthemove",
    whatsapp: "https://wa.me/6738197773",
    linktree: "https://linktr.ee/AsuhOnTheMove.com"
  }
};