//const baseApiURL = 'https://st.wooh.cc'
const baseApiURL = 'http://vaskania-new.loc'
const restApiURL = '/wp-json/vs-calculator/v1'
const apiDistDir = baseApiURL + '/wp-content/plugins/vaskaniya-calc/dist'

export const appImageDefault = '/img-placeholder.jpeg'

export const configConstants = {
    baseApiURL,
    restApiURL,
    apiDistDir,
    apiAssetsDir: apiDistDir + '/assets',
    apiImagesDir: apiDistDir + '/assets/images',
}

export class Config {
    static getImageUrl(url?: string) {
        if (url) return url

        return (
            //configConstants.baseApiURL +
            configConstants.apiImagesDir + appImageDefault
        )
    }
}
