// Demo and sales requests go through the dealership-verified form on vehix.ai.
// Never use prefilled email links here — they were harvested and replayed as spam.
const VEHIX_CONTACT = 'https://vehix.ai/';

const contactUrl = (campaign: string) =>
  `${VEHIX_CONTACT}?utm_source=kebi.ai&utm_medium=referral&utm_campaign=${campaign}#contact`;

export const DEMO_URL = contactUrl('request_demo');
export const SALES_URL = contactUrl('talk_to_sales');
export const CONTACT_URL = contactUrl('contact');
