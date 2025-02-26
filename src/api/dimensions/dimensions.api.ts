import { AxiosApi } from '@/api/axios/axios.api'
import { DimensionsContract } from '@/api/dimensions/dimensions.contracts.ts'

export class DimensionsApi extends AxiosApi {
    public baseUrl = '/dimensions'

    async dimensions(): Promise<DimensionsContract> {
        return this.get(this.baseUrl)
    }
}
