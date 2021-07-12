import { ClubModel } from '@zs-tools/api';

export interface FootballClubsModel {
    hungary: ClubModel[];
}

export const FootballClubNames = {
    england: [
        'Liverpool',
        'Brentford',
        'Arsenal',
        'Leeds United',
        'Manchester United',
        'Manchester City',
        'Chelsea',
        'Everton',
    ],
    hungary: [
        'Ferencvárosi TC',
        'Kisvárda',
        'Gyirmót',
        'MTK Budapest',
        'Honvéd FC',
        'Debreceni VSC',
        'Paks',
        'Mezőkövesd',
        'Újpest',
        'Puskás Akadémia',
        'Zalaegerszeg',
        'MOL Fehérvár FC',
    ],
};

export const FootballClubs: FootballClubsModel = {
    hungary: [
        {
            name: 'Ferencvárosi TC',
            logo: 'OvQtjVhl-UwWuVjQG.png',
            simpleName: 'FTC',
        },
        {
            name: 'Kisvárda',
            logo: '2orRQwFa-hfdv4eKU.png',
            simpleName: 'KFC',
        },
        {
            name: 'Gyirmót',
            logo: 'fZCrbVCa-dOz68Nnc.png',
            simpleName: 'GYMT',
        },
        {
            name: 'MTK Budapest',
            logo: 'pre3mce5-UPG1uid0.png',
            simpleName: 'MTK',
        },
        {
            name: 'Honvéd FC',
            logo: 'jHYI6seM-O2YQedoG.png',
            simpleName: 'HFC',
        },
        {
            name: 'Debreceni VSC',
            logo: 'dYpV6RzS-vPHbdA2d.png',
            simpleName: 'DVSC',
        },
        {
            name: 'Paks',
            logo: 'QweoGhyB-0jh10vDn.png',
            simpleName: 'PAKS',
        },
        {
            name: 'Mezőkövesd',
            logo: 'lIcWREZA-vBQUODgm.png',
            simpleName: 'MFC',
        },
        {
            name: 'Újpest',
            logo: 'O8NsDZZA-zNocN8qj.png',
            simpleName: 'UTE',
        },
        {
            name: 'Puskás Akadémia',
            logo: 'Y7HEubCa-YmSv3BTa.png',
            simpleName: 'PAD',
        },
        {
            name: 'Zalaegerszeg',
            logo: 'YRfnOucM-U16WmAKs.png',
            simpleName: 'ZTE',
        },
        {
            name: 'MOL Fehérvár FC',
            logo: 'INGAUZkl-xd78qJnJ.png',
            simpleName: 'MOLFC',
        },
    ],
};

export class FootballClubsService {
    public static getHungaryClubs(): ClubModel[] {
        return FootballClubs.hungary;
    }
}
