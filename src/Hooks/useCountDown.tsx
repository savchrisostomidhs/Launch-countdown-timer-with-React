import { useEffect, useState } from "react";

function useCountDown(num: number) {
    const [launchDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + num);
        return date;
    });

    const [total] = useState(launchDate.getTime() - new Date().getTime());
    const [seconds, setSeconds] = useState(Math.floor((total / 1000) % 60));
    const [minutes, setMinutes] = useState(Math.floor((total / 1000 / 60) % 60));
    const [hours, setHours] = useState(Math.floor((total / (1000 * 60 * 60)) % 24));
    const [days, setDays] = useState(Math.floor(total / (1000 * 60 * 60 * 24)));

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = launchDate.getTime() - new Date().getTime();
            setSeconds(Math.floor((diff / 1000) % 60));
            setMinutes(Math.floor((diff / 1000 / 60) % 60));
            setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        }, 1000);

        return () => clearInterval(interval);
    }, [launchDate]);

    return { days, hours, minutes, seconds };
}

export default useCountDown