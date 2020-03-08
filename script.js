function click_1() {
    console.log("button works");

    async function click() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let date = new Date()
        let modifier = 1;
        let dateString = ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + (date.getDate() - modifier)).slice(-2) + "-" + (date.getFullYear())
        let response = await fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${dateString}.csv`, requestOptions)

    }
    click()
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    function tryDate() {
        while (response.status !== 200) {
            let tryDay = date.getDate() - modifier;
            dateString = ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + (tryDay)).slice(-2) + "-" + (date.getFullYear);
            click();
            modifier++;
            console.log("i looped")
        }
    }


}