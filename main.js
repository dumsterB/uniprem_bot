import axios from 'axios'
let REFRESH_TOKEN = 'AOkPPWSbk333W3StP073KfNfyJWiXoDlim6woYod49rWcONeZYVcICcYiZec_b2xTRgLv_5jtFEvunX3R1F-AchkyMmIv2yEZKy5g1U1xsPv6LcqGm8uBuGpns_JPdCnRp9D2e0aysL4EazZG4sJoWk5I_EzULB9xDtTrI-5c5j1LhmgQTfeGQRJ04nIMaIfKcG3xG-Aq3YpviXj6wis8GCzCYVAYaZr4B9ifhGp6dIRX7kdinix5TulC79p5Bfb3GB4p9m2E9uY'
export function getUrl(id) {
    return axios.get(`https://www.freepik.com/xhr/download-url/${id}`, {
        headers: {
            "accept": "*/*",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cookie": `_fcid=FC.b96c3259-0d73-837a-7a31-774a1ad1d464; filters-configs={"group":[{"name":"type","show":true},{"name":"license","show":true}],"show":true}; _gcl_au=1.1.1389135676.1671131490; fp_ga=GA1.1.470343965.1671131491; test_ga=GA1.1.470343965.1671131491; ikaue_gr_ga=%22470343965.1671131491%22; _pin_unauth=dWlkPU1EUmhZamcwTnpBdE9ERm1aQzAwWmpZeExXRXpOamN0TWpBNU0yVXlZbU0zWW1ZNA; OptanonAlertBoxClosed=2022-12-15T19:15:00.501Z; _hjSessionUser_1331604=eyJpZCI6ImE1MzlmMDFhLTg5OTctNTEyNy1iM2YwLTY5MWVmMzg0NTBhYiIsImNyZWF0ZWQiOjE2NzExMzE0OTU0ODIsImV4aXN0aW5nIjp0cnVlfQ==; tooltipFixed-freepik-edit=1; g_state={"i_p":1673731760363,"i_l":4}; CB_URL=https://www.freepik.com/checkout/freepik/FR-PREMIUM-1/one-step-reduced?opt=year&country=UZ&log-in=email; G_ENABLED_IDPS=google; ol-OL_Tracking_ID=49518102; test_ga_18B6QPTJPC=GS1.1.1671448817.16.0.1671448817.60.0.0; _ga_QY8ZD2ZNM0=GS1.1.1671708923.1.0.1671708923.60.0.0; fp_ga_PK4FYLJC1D=GS1.1.1671708923.1.0.1671708923.60.0.0; _hjSessionUser_2398827=eyJpZCI6IjRjMGYxY2U1LTZhOWQtNTg5YS1hZDIwLTI0NTUyZTgyYmQyZCIsImNyZWF0ZWQiOjE2NzE3MDg5MjA4MjMsImV4aXN0aW5nIjp0cnVlfQ==; GR_REFRESH=${REFRESH_TOKEN}; GRID=49518102; _fc=FC.851a3ded-2ee4-2888-5d7e-13794f15541c; gr_lang=en; ads-tag=b; _gid=GA1.2.1831101992.1673173790; _gat_gtag_UA_19303147_22=1; _dc_gtm_UA-19303147-22=1; _hjIncludedInSessionSample=0; _hjSession_1331604=eyJpZCI6ImRlNWQzZTUzLWZmMDYtNGIyMS1iNmE2LTAyMjNlNWZjZmVjNyIsImNyZWF0ZWQiOjE2NzMxNzM3OTU4MDAsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _hjCachedUserAttributes=eyJhdHRyaWJ1dGVzIjp7InVzZXJUeXBlIjoicGF5bWVudC11c2VyIn0sInVzZXJJZCI6IjQ5NTE4MTAyIn0=; _lr_geo_location=UZ; csrf_freepik=0f08fe601d1aaf8a3b606118680dd8a6; ol-OL_APP_CLEAN_INSTALL_TIME=1673173808232; ol-OL_Session_Id=4b39770b-d030-4d04-a465-aa06655d21b3; ol-OL_Prev_Tracking_ID=@OL@ee7a6d2c437da6c35df5c4aea6c4; ol-OL_LIB_INSTALL_TIME=1673173808232; autopromo-visit={"l_ud":1671132034695,"l_vt":21,"p_ud":1671133013007,"p_vt":29}; _ga=GA1.2.470343965.1671131491; refmodal=https://www.freepik.com/premium-vector/station-wagon-car-vector_33146060.htm#query=cars&position=7&from_view=search&track=sph; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Jan+08+2023+15%3A30%3A21+GMT%2B0500+(%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%2C+%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&version=6.30.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1&geolocation=UZ%3BTK&AwaitingReconsent=false; _derived_epik=dj0yJnU9cjNfVFVrbXoxTW9uSTUzRU9YT19xTU1UZzdVVXJCbW4mbj11X2pFUEhaOHY2R0FGWm0xMEx5NFl3Jm09MSZ0PUFBQUFBR082bXdrJnJtPTEmcnQ9QUFBQUFHTzZtd2smc3A9Mg; CB_URL=https://www.freepik.com/premium-vector/station-wagon-car-vector_33146060.htm#query=cars&position=7&from_view=search&track=sph; CB_PURCHASE_URL=https://www.freepik.com/premium-vector/station-wagon-car-vector_33146060.htm#query=cars&position=7&from_view=search&track=sph#modal=modal-premium-complete; fp_ga_QWX66025LC=GS1.1.1673173793.32.1.1673173822.31.0.0; _ga_18B6QPTJPC=GS1.1.1673173793.17.1.1673173822.31.0.0; ck_items_49518102=["33146060"]`,
            "referer": " https://www.freepik.com/premium-vector/station-wagon-car-vector_33146060.htm",
            "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-dest": " empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
            "x-csrf-token": "0f08fe601d1aaf8a3b606118680dd8a6",
            "x-requested-with": "XMLHttpRequest"
        }
    }).then((res) => {
       return res.data?.url
    })
}