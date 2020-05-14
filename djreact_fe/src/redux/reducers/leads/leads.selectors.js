import { createSelector } from 'reselect'

const selectLead = (state) => state.lead

const selectLeadList = createSelector([selectLead], (lead) => lead.leadList)

export const selectListArray = createSelector([selectLeadList], (leadList) =>
  leadList.listData ? leadList.listData : []
)
