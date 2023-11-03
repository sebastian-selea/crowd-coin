import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xAa877352A6806ED747E352Fc8bD7D0A70620A85b'
);

export default instance;