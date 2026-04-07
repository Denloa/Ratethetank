"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Star,
  Sword,
  Route,
  HeartPulse,
  MessageSquare,
  Skull,
  ExternalLink,
} from "lucide-react";

const profile = {
  character: "Denloa",
  realm: "Moon Guard",
  region: "US",
  spec: "Protection Paladin",
  score: 3127,
  role: "Tank",
  raiderIO: "https://raider.io/characters/us/moon-guard/Denloa",
};

const categories = [
  { key: "mechanics", label: "Mechanics", icon: Shield, hint: "Did the tank handle mechanics cleanly?" },
  { key: "route", label: "Route", icon: Route, hint: "Did the pathing and count feel good?" },
  { key: "pace", label: "Pace", icon: Sword, hint: "Were pulls smooth and fast without griefing?" },
  { key: "survival", label: "Survival", icon: HeartPulse, hint: "Did the tank stay alive and feel sturdy?" },
  { key: "queueAgain", label: "Queue Again", icon: Star, hint: "Would you run with this tank again?" },
];

const starterReviews = [
  {
    id: 1,
    dungeon: "The MOTHERLODE!! +12",
    createdAt: "2 hours ago",
    comment: "Clean pulls and the run felt controlled the whole way.",
    ratings: { mechanics: 5, route: 4, pace: 5, survival: 5, queueAgain: 5 },
  },
  {
    id: 2,
    dungeon: "Theater of Pain +10",
    createdAt: "yesterday",
    comment: "Good tank, just one scuffed route moment after second boss.",
    ratings: { mechanics: 4, route: 3, pace: 4, survival: 4, queueAgain: 4 },
  },
  {
    id: 3,
    dungeon: "Cinderbrew Meadery +11",
    createdAt: "2 days ago",
    comment: "Very stable and easy to heal. Would absolutely queue again.",
    ratings: { mechanics: 5, route: 4, pace: 4, survival: 5, queueAgain: 5 },
  },
];

function average(list, key) {
  if (!list.length) return 0;
  const total = list.reduce((sum, item) => sum + (item.ratings[key] || 0), 0);
  return total / list.length;
}

function overallAverage(list) {
  if (!list.length) return 0;

  const total = list.reduce((sum, item) => {
    const values = categories.map((category) => item.ratings[category.key] || 0);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    return sum + avg;
  }, 0);

  return total / list.length;
}

function stars(value) {
  const rounded = Math.round(value);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

function RatingPips({ value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={`h-10 w-10 rounded-xl border text-sm font-bold transition ${
            value >= n
              ? "border-amber-300 bg-amber-300/20 text-amber-200"
              : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-amber-200/40 hover:text-amber-100"
          }`}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export default function RateMyTankPage() {
  const [reviews, setReviews] = useState(starterReviews);
  const [form, setForm] = useState({
    dungeon: "",
    comment: "",
    mechanics: 4,
    route: 4,
    pace: 4,
    survival: 4,
    queueAgain: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const categoryAverages = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      value: average(reviews, category.key),
    }));
  }, [reviews]);

  const totalAverage = useMemo(() => overallAverage(reviews), [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: Date.now(),
      dungeon: form.dungeon || "Unknown key",
      createdAt: "just now",
      comment: form.comment.trim() || "No comment left. Just vibes and judgment.",
      ratings: {
        mechanics: form.mechanics,
        route: form.route,
        pace: form.pace,
        survival: form.survival,
        queueAgain: form.queueAgain,
      },
    };

    setReviews((current) => [newReview, ...current]);
    setSubmitted(true);
    setForm({
      dungeon: "",
      comment: "",
      mechanics: 4,
      route: 4,
      pace: 4,
      survival: 4,
      queueAgain: 5,
    });

    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 w-fit rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200"
        >
          WoW Mythic+ Tank Report • Anonymous guild and pug feedback
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-[28px] border border-amber-200/15 bg-slate-900/60 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-2 text-amber-200">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.24em]">Rate My Tank</span>
                </div>
                <h1 className="text-4xl font-black tracking-tight text-amber-50 sm:text-5xl">
                  {profile.character}
                </h1>
                <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
                  A fast anonymous page where people can judge the run, rate the tank, and move on without making an account.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{profile.spec}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{profile.realm}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{profile.role}</span>
                </div>
              </div>

              <div className="rounded-[24px] border border-amber-300/20 bg-amber-300/10 px-6 py-5 text-center lg:min-w-[210px]">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-200">Raider.IO</div>
                <div className="mt-2 text-5xl font-black text-amber-50">{profile.score}</div>
                <div className="mt-1 text-sm text-slate-300">Current Mythic+ score</div>
                <a
                  href={profile.raiderIO}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300/25 px-3 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300/10"
                >
                  View profile <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[28px] border border-amber-200/15 bg-slate-900/60 p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-amber-200">Overall Rating</p>
                <div className="mt-2 text-5xl font-black text-amber-50">{totalAverage.toFixed(1)}</div>
                <div className="mt-2 text-base text-amber-100">{stars(totalAverage)}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                <div className="text-2xl font-bold text-slate-100">{reviews.length}</div>
                <div className="text-sm text-slate-400">reviews</div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {categoryAverages.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.key} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl border border-amber-200/15 bg-amber-300/10 p-2 text-amber-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-100">{category.label}</div>
                          <div className="text-xs text-slate-400">{category.hint}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-amber-100">{category.value.toFixed(1)}/5</div>
                        <div className="text-xs text-slate-400">{stars(category.value)}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-[28px] border border-amber-200/15 bg-slate-900/60 p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-amber-300/15 bg-amber-300/10 p-2 text-amber-200">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-50">Leave a rating</h2>
                <p className="text-sm text-slate-400">Fast enough for pug survivors. No login needed.</p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Dungeon / key</label>
                <input
                  value={form.dungeon}
                  onChange={(e) => setForm((prev) => ({ ...prev, dungeon: e.target.value }))}
                  placeholder="Ara-Kara +11"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-200/40"
                />
              </div>

              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.key} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-xl border border-amber-300/15 bg-amber-300/10 p-2 text-amber-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100">{category.label}</div>
                        <div className="text-xs text-slate-400">{category.hint}</div>
                      </div>
                    </div>
                    <RatingPips
                      value={form[category.key]}
                      onChange={(value) => setForm((prev) => ({ ...prev, [category.key]: value }))}
                    />
                  </div>
                );
              })}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Anonymous comment</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm((prev) => ({ ...prev, comment: e.target.value }))}
                  placeholder="Felt clean, route was good, one risky pull but we lived."
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-amber-200/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-amber-300 px-4 py-3 text-base font-black text-slate-950 transition hover:scale-[1.01]"
              >
                Submit rating
              </button>

              {submitted && (
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200">
                  Rating submitted. The court of public opinion has spoken.
                </div>
              )}
            </form>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[28px] border border-amber-200/15 bg-slate-900/60 p-6 shadow-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl border border-amber-300/15 bg-amber-300/10 p-2 text-amber-200">
                <Skull className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-amber-50">Recent judgments</h2>
                <p className="text-sm text-slate-400">Anonymous feedback from keys people actually remember.</p>
              </div>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => {
                const values = categories.map((category) => review.ratings[category.key] || 0);
                const runAverage = values.reduce((a, b) => a + b, 0) / values.length;

                return (
                  <div key={review.id} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-lg font-bold text-slate-100">{review.dungeon}</div>
                        <div className="mt-1 text-sm text-slate-400">Anonymous reviewer • {review.createdAt}</div>
                      </div>
                      <div className="rounded-2xl border border-amber-300/15 bg-amber-300/10 px-4 py-3 text-right">
                        <div className="text-sm uppercase tracking-[0.2em] text-amber-200">Run rating</div>
                        <div className="text-2xl font-black text-amber-50">{runAverage.toFixed(1)}</div>
                        <div className="text-xs text-slate-300">{stars(runAverage)}</div>
                      </div>
                    </div>

                    <p className="mt-4 text-slate-300">{review.comment}</p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                      {categories.map((category) => (
                        <div
                          key={category.key}
                          className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
                        >
                          <span className="font-semibold text-slate-100">{category.label}:</span>{" "}
                          {review.ratings[category.key]}/5
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
