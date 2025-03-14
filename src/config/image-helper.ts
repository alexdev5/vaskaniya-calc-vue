//const baseApiURL = 'https://vs-admin-wp.system-25.com'
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

export class ImageHelper {
    static getImage(url?: string) {
        if (url) return url

        return (
            //configConstants.baseApiURL +
            configConstants.apiImagesDir + appImageDefault
        )
    }

    static getImageUrl(path?: string) {
        return configConstants.apiImagesDir + '/' + path
    }
}
