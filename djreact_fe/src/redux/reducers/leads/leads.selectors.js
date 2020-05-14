import { createSelector } from 'reselect'

const selectLeads = (state) => state.leadList

// const selectLeadList = createSelector([selectLeads], (leads) => leads.leadList)
export const selectListArray = createSelector([selectLeads], (leadList) =>
  leadList.listData ? leadList.listData : []
)
