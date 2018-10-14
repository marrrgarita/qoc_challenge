import * as types from './actionTypes';

export const receiveApps = (data) => {
    return {type: types.RECEIVE_APPS,
    apps: data}
}

export const fetchApplications = () => {
  return (dispatch) => {
    return fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json',{
      method: "GET"
    }).then(response => response.json())
    .then((responseJSON) => {
        console.log(responseJSON.feed.entry);
        dispatch(receiveApps(responseJSON.feed.entry))

    })
  }
}



// export const fetchData = () => {
//     return (dispatch) => {
//         dispatch(loadingData())
//         return fetch(BLL.helpers.globalVars.API_BASE_URL + '/asset/GetReportData', {
//             method: "GET",
//             credentials: 'include',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }).then(response => BLL.helpers.miscHelpers.responseValidator(response)).then(response => {
//             if (response.success) {
//                 dispatch(initReports(response.payload))
//             } else {
//                 dispatch(initReports([]))
//                 toastr.error('Error loading report data', response.messages[0]);
//             }
//         })
//     }
// }
