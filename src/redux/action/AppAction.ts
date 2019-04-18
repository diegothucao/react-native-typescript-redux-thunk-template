import IAction from './IAction'
import { dealService } from "../../service/deal/DealService"
import UtilAction from "../action/UtilAction"

export default class AppAction {
    public static readonly GET_DEALS: string = 'AppAction.GET_DEALS'
    public static readonly DEALS_LOADED: string = 'AppAction.DEALS_LOADED'
    public static readonly SHOW_DEAL_LIST: string = 'AppAction.SHOW_DEAL_LIST'
    public static readonly SHOW_DEAL_DETAIL: string = 'AppAction.SHOW_DEAL_DETAIL'

    public static getDeals = (searchTerm: string | ''): any => {
        return async (dispatch: any, ) => {
            try {
                dispatch ({
                    type: AppAction.GET_DEALS,
                    payload: searchTerm
                })
                let data = await dealService.searchData(searchTerm)
                dispatch ({
                    type: AppAction.DEALS_LOADED,
                    data: data
                })
            }
            catch (_) {
                dispatch ({
                    type: UtilAction.ERROR,
                    errorMessage: "Cannot load deals"
                })
    
            }
        }
    }

    public static setCurrentDeal = (dealId: string): IAction<string, void> => {
        return {
            payload: dealId,
            type: AppAction.SHOW_DEAL_DETAIL
        }
    }

    public static unsetCurrentDeal = (): IAction<void, void> => {
        return {
            type: AppAction.SHOW_DEAL_LIST
        }
    }
}
