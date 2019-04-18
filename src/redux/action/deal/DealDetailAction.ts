import IAction from '../IAction'
import Deal from '../../../model/deal/Deal'
import { dealService } from "../../../service/deal/DealService"
import UtilAction from "../../action/UtilAction"

export default class DealDetailAction {
    public static readonly INITIAL_DETAIL: string = 'DealDetailAction.INITIAL_DETAIL'
    public static readonly DEAL_FETCHED: string = 'DealDetailAction.DEAL_FETCHED'
    public static readonly DEAL_FETCH_DETAIL: string = 'DealDetailAction.DEAL_FETCH_DETAIL'

    public static fetchDetail(deal: Deal): IAction<Deal, void> {
        return async (dispatch, _)  => {
            try {
                    dispatch({
                        type: DealDetailAction.INITIAL_DETAIL,
                        payload: deal
                    })
                dispatch({
                    type: DealDetailAction.DEAL_FETCH_DETAIL,
                    payload: await dealService.fetchById(deal.key)
                })
            }
            catch (_) {
                dispatch({
                    type: UtilAction.ERROR,
                    errorMessage: "Cannot process data"
                })
            }
        }
    }

}
