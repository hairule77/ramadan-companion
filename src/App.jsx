import React from "react";
import PrayerTimeCard from "./components/PrayerTimeCard";
import "./components/PrayerTimeCard.css";

export default function App() {
  return (
    <main className="home-screen">
      <p className="home-screen__section-label">Today</p>

      <PrayerTimeCard
        nextPrayerName="Maghrib"
        nextPrayerTime="6:44 PM"
        countdown="00:37:42"
        dateLabel="13 Ramadan 1447 • Mar 2"
        locationLabel="Jakarta, Indonesia"
        progressPercent={74}
      />
    </main>
  );
}
