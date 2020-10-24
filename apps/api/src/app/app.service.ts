import { Injectable } from '@nestjs/common';
import { HeadlineNews, News } from '@cactus/shared';
@Injectable()
export class AppService {
  getNews(category: string): News[] {

    switch(category){
      case 'top':
        return this.getTopNews();
      case 'world':
        return this.getWorldNews();
      case 'ipl':
        return this.getIPLNews();
    }
  }
  getTopNews(): (News | HeadlineNews)[]{
    return [
      {
        id: "1",
        isHeadline: true,
        title: "India's Bharat Biotech in talks to take vaccine candidate global",
        imageUrl: 'https://static.toiimg.com/thumb/msid-78831715,imgsize-35484,width-400,resizemode-4/78831715.jpg',
        shortDesc: "BENGALURU: India's Bharat Biotech is in discussions with more than 10 countries that have shown an interest in a potential Covid-19 vaccine it is developing with Indian Council of Medical Research (ICMR), a company executive told Reuters on Friday. ",
        url: 'https://timesofindia.indiatimes.com/india/indias-bharat-biotech-in-talks-to-take-vaccine-candidate-global/articleshow/78831700.cms'
      },
      {
        id: "2",
        isHeadline: false,
        title: "I-T return filing deadline extended till Dec 31",
        url: 'https://timesofindia.indiatimes.com/business/india-business/deadline-for-filing-itr-by-individual-taxpayers-others-extended-finance-ministry/articleshow/78843709.cms'
      },
      {
        id: "3",
        isHeadline: false,
        title: "China illegally occupied Nepal land: Indian intel",
        url: 'https://timesofindia.indiatimes.com/world/south-asia/china-illegally-occupies-nepals-land-at-many-places-indias-intelligence-agencies-sound-alert/articleshow/78846754.cms'
      },
      {
        id: "4",
        isHeadline: false,
        title: "Live: Pre-departure testing soon at Delhi airport",
        url: 'https://timesofindia.indiatimes.com/india/coronavirus-live-updates-recoveries-cross-7-million-nearly-90-of-all-covid-cases/liveblog/78838483.cms'
      }
    ];
  }
  getWorldNews(): (News | HeadlineNews)[]{
    return [
      {
        id: "1",
        isHeadline: true,
        title: "Suicide bomber kills 18 in Kabul",
        imageUrl: 'https://static.toiimg.com/photo/78849611.cms',
        shortDesc: "KABUL: A suicide bomber struck near an education centre in the Afghan capital on Saturday, killing at least 18 people in the latest attack to rock the conflict-wracked country.",
        url: 'https://timesofindia.indiatimes.com/world/south-asia/suicide-bomber-kills-18-in-kabul/articleshow/78846471.cms'
      },
      {
        id: "2",
        isHeadline: false,
        title: "Erdogan says Macron 'needs treatment' over attitude to Muslims",
        url: 'https://timesofindia.indiatimes.com/world/middle-east/turkeys-erdogan-says-macron-needs-treatment-over-attitude-to-muslims/articleshow/78849606.cms'
      },
      {
        id: "3",
        isHeadline: false,
        title: "PML-N has 'broken the shackles of fear': Maryam Nawaz",
        url: 'https://timesofindia.indiatimes.com/world/pakistan/pml-n-has-broken-the-shackles-of-fear-maryam-nawaz/articleshow/78849470.cms'
      },
      {
        id: "4",
        isHeadline: false,
        title: "Poland's president has coronavirus, apologizes to contacts",
        url: 'https://timesofindia.indiatimes.com/world/europe/polands-president-has-coronavirus-apologizes-to-contacts/articleshow/78848467.cms'
      }
    ];
  }
  getIPLNews(): (News | HeadlineNews)[]{
    return [
      {
        id: "1",
        isHeadline: true,
        title: "Tendulkar lauds Mandeep, Rana for playing despite personal losses",
        imageUrl: 'https://static.toiimg.com/thumb/imgsize-748870,msid-78850565,width-650,resizemode-4/78850565.jpg',
        shortDesc: "NEW DELHI: Former India batsman Sachin Tendulkar on Saturday lauded Nitish Rana and Mandeep Singh for turning up to play despite suffering family tragedies.",
        url: 'https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2020-sachin-tendulkar-lauds-mandeep-singh-nitish-rana-for-playing-despite-personal-losses/articleshow/78850552.cms'
      },
      {
        id: "2",
        isHeadline: false,
        title: "Play with freedom, not with survival mind-set: Shreyas Iyer to teammates",
        url: 'https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/play-with-freedom-not-with-survival-mind-set-shreyas-iyer-to-teammates/articleshow/78848755.cms'
      },
      {
        id: "3",
        isHeadline: false,
        title: "IPL 13: Enjoyed Shreyas Iyer's wicket the most, says Varun Chakravarthy",
        url: 'https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-13-enjoyed-shreyas-iyers-wicket-the-most-says-varun-chakravarthy/articleshow/78848599.cms'
      },
      {
        id: "4",
        isHeadline: false,
        title: "IPL 2020: Gayle is a smart player, he has brought energy to KXIP team, says Tendulkar",
        url: 'https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2020-gayle-is-a-smart-player-he-has-brought-energy-to-kxip-team-says-tendulkar/articleshow/78845420.cms'
      }
    ];
  }
}
