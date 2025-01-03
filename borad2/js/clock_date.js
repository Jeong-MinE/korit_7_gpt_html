function clockDateRun() {
    const padClockdate = document.querySelector(".pad-clock-date");
    setInterval(() => {
        const now = new Date();
        const nowHours = now.getHours();
        const nowMinutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const nowMonth = now.getMonth() + 1;
        const nowDate = now.getDate();
        const nowDay = now.getDay();
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"]; 
        const dayName = daysOfWeek[nowDay];
        const nowClockText = `${nowHours}:${nowMinutes} ${nowMonth}월${nowDate}일${dayName}요일`;
        padClockdate.innerHTML = nowClockText;
    }, 1000);
}

clockDateRun();