export class LogoApiService {
    getUrlToLogo(university) {
        try{
            const host = new URL(university.web_pages[0]).hostname;
            return `https://logo.clearbit.com/${host}`;
        }catch (error){
            console.error('Invalid URL:', university);
            return null;
        }
    }
}