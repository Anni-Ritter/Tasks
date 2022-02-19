function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', () => {
        converterTime('days', parseFloat(days.value));
    });
    document.getElementById('hoursBtn').addEventListener('click', () => {
        converterTime('hours', parseFloat(hours.value));
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        converterTime('minutes', parseFloat(minutes.value));
    });
    document.getElementById('secondsBtn').addEventListener('click', () => {
        converterTime('seconds', parseFloat(seconds.value));
    });

    function converterTime(type, number){
        switch(type){
            case 'days':
                hours.value = (number * 24).toString();
                minutes.value  = (number * 1440).toString();
                seconds.value = (number * 86400).toString();
                break;
            case 'hours':
                days.value = (number / 24).toFixed(2).toString();
                minutes.value = (number * 1400).toString();
                seconds.value = (number * 86400).toString();
                break;
            case 'minutes':
                days.value = (number / 1400).toFixed(2).toString();
                hours.value = (number / 60).toFixed(2).toString();
                seconds.value = (number * 60).toString();
                break;
            case 'seconds':
                days.value = (number / 86400).toFixed(2).toString();
                hours.value = (number / 3600). toFixed(2).toString();
                minutes.value = (number / 60).toFixed(2).toString();
                break;
        }
    }
}