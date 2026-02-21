import React from "react";
import "./PrayerTimeCard.css";

/**
 * UI-only prayer card.
 * Keeps all required information visible:
 * - next prayer name
 * - time
 * - countdown
 * - date
 * - location
 */
export default function PrayerTimeCard({
  nextPrayerName,
  nextPrayerTime,
  countdown,
  dateLabel,
  locationLabel,
  progressPercent = 0,
}) {
  const progress = Math.max(0, Math.min(100, progressPercent));

  return (
    <section className="prayer-card" aria-label="Next prayer card">
      <div className="prayer-card__pattern" aria-hidden="true" />

      <header className="prayer-card__top-row">
        <div>
          <p className="prayer-card__eyebrow">Next Prayer</p>
          <h2 className="prayer-card__name">{nextPrayerName}</h2>
        </div>
        <span className="prayer-card__crescent" aria-hidden="true">
          ☾
        </span>
      </header>

      <div
        className="prayer-card__main-time"
        aria-label={`Prayer time ${nextPrayerTime}`}
      >
        {nextPrayerTime}
      </div>

      <div className="prayer-card__countdown-wrap">
        <span className="prayer-card__countdown-label">Begins in</span>
        <strong className="prayer-card__countdown pulse">{countdown}</strong>
      </div>

      <div className="prayer-card__progress" aria-hidden="true">
        <span
          className="prayer-card__progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <footer className="prayer-card__meta-grid">
        <div className="prayer-card__meta-item">
          <span className="prayer-card__meta-label">Date</span>
          <span className="prayer-card__meta-value">{dateLabel}</span>
        </div>
        <div className="prayer-card__meta-item">
          <span className="prayer-card__meta-label">Location</span>
          <span className="prayer-card__meta-value">{locationLabel}</span>
        </div>
      </footer>
    </section>
  );
}
