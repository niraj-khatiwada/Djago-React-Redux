import { createSelector } from 'reselect'

const selectLeads = (state) => state.leads

export const selectListArray = createSelector([selectLeads], (leads) =>
  leads.data ? leads.data : []
)
